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

module.exports = {
    addAgent
}