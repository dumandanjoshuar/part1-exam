// from Models
const User = require('../models/User')
const validatePassword = require("./validatePassword")

// Post method to register a user
module.exports.registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body

        const existingUser = await User.findOne({
            email
        })

        if (existingUser) {
            return res.status(400).send({
                error: "Email already exists, please use a different email"
            })
        }

        const validPassword = validatePassword(password)

        if (validPassword) {

            let newUser = new User({
                username,
                email,
                password
            })
    
            await newUser.save()
    
            res.status(201).send({
                message: "New user has been registered",
                user: newUser
            })
        } else {
            return res.status(400).json({
                error: "Invalid password. Password must contain at least 8 characters, including a letter and a number"
            })
        }
        
    } catch (error) {
        console.error("Error during user registration:", error);
        return res.status(500).json({
            error: "Internal Server Error"
        });
    }
}

// Retrieve all users using GET method
module.exports.getAllUsers = async (req, res) => {
    try {
        const data = await User.find({})
        res.status(200).send(data)
    } catch (error) {
        console.log({
            error: error.message
        })
    }
}

// Update user by ID
module.exports.updateUser = async (req, res) => {
    try {
        const userId = req.params.userId
        const { username, email, password } = req.body

        const updatedUser = await User.findByIdAndUpdate(userId, {
            username,
            email,
            password
        },
        {
            new: true
        })

        if(updatedUser) {
            res.status(200).send({
                message: 'User updated successfully',
                user: updatedUser
            })
        } else {
            res.status(404).send({
                error: 'User not found'
            })
        }

    } catch (error) {
        console.log({
            error: error.message
        })
    }
}

// Delete user by ID
module.exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId
        const deletedUser = await User.findByIdAndDelete(userId)

        if (deletedUser) {
            res.status(200).send({
                message: 'User deleted successfully'
            })
        } else {
            res.status(404).send({ 
                error: "User not found!!"
            })
        }

    } catch (error) {
        console.log({
            error: error.message
        })
    }
}
