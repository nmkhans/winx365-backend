const Auth = require("../models/AuthModel");
const bcrypt = require("bcrypt");

//? register a new user
const registerAdmin = async (req, res) => {
    try {
        const data = req.body;
        const userExist = await Auth.findOne(
            { email: data.email }
        );

        if (!userExist) {
            const hashedPassword = await bcrypt.hash(data.password, 10);

            const newUser = {
                ...data,
                password: hashedPassword
            };

            await Auth.create(newUser);

            res.status(201).json({
                success: true,
                message: "User registration successfull."
            })

        } else {
            return res.status(500).json({
                success: false,
                message: "User already exist!"
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "There was a server side error!"
        })
    }
}

//? login a user
const loginAdmin = async (req, res) => {
    try {
        const data = req.body;
        const userExist = await Auth.findOne(
            { email: data.email }
        );

        if (userExist) {
            const isMatch = await bcrypt.compare(data.password, userExist.password);

            if (isMatch) {
                const user = await Auth.findOne(
                    { email: data.email },
                    { password: 0 }
                )

                res.status(200).json({
                    success: true,
                    message: "Login successfull.",
                    data: user
                })

            } else {
                return res.status(500).json({
                    success: false,
                    message: "Wrong password!"
                })
            }

        } else {
            return res.status(500).json({
                success: false,
                message: "No user found!"
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "There was a server side error"
        })
    }
}

module.exports = {
    registerAdmin,
    loginAdmin
}