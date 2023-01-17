const User = require("../models/UserModel");
const bcrypt = require("bcrypt");

//? register a new user
const registerUser = async (req, res) => {
    try {
        const data = req.body;
        const userExist = await User.findOne({ email: data.email });

        if (!userExist) {
            const hashedPassword = await bcrypt.hash(data.password, 10);

            const newUser = {
                ...data,
                password: hashedPassword
            };

            await User.create(newUser);

            res.status(201).json({
                success: true,
                message: "User registration successfull."
            })
        
        } else {
            res.status(500).json({
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

module.exports = {
    registerUser
}