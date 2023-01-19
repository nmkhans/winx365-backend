const Agent = require("../models/AgentModel");

//? add a agent
const addAgent = async (req, res) => {
    try {
        const data = req.body;
        const agentExist = await Agent.findOne(
            { email: data.email }
        );

        if (!agentExist) {
            await Agent.create(data)
            res.status(200).json({
                success: true,
                message: "Agent successfully added."
            })

        } else {
            return res.status(500).json({
                success: false,
                message: "Agent already exist!"
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "There was a server side error!"
        })
    }
}

//? get all agent
const getAgents = async (req, res) => {
    try {
        const { role, pageno, perpage } = req.query;
        const pageNo = parseInt(pageno);
        const perPage = parseInt(perpage);
        const skipRow = ((pageNo - 1) * perPage);

        const agents = await Agent.aggregate([
            {
                $facet: {
                    count: [
                        { $match: { role: role } },
                        { $count: "value" }
                    ],
                    data: [
                        { $match: { role: role } },
                        { $skip: skipRow },
                        { $limit: perPage }
                    ]
                }
            }
        ])

        res.status(200).json({
            success: true,
            message: "agent list",
            data: agents
        })


    } catch (error) {
        console.log(error)
        res.status(200).json({
            success: false,
            message: "There was a server side error!"
        })
    }
}

//? delete a agent
const deleteAgent = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Agent.deleteOne({ _id: id });
        
        res.status(200).json({
            success: true,
            message: "Agent deleted.",
            data: result
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "There was a server side error"
        })
    }
}

module.exports = {
    addAgent,
    getAgents,
    deleteAgent
}