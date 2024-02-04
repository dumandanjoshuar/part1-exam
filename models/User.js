const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required']
    },

    email: {
        type: String,
        required: [true, 'Email is required']
    },

    password: {
        type: String,
        required: [true, 'Password is required']
    },
    createdOn: {
        type: mongoose.Schema.Types.Date,
        required: true,
        default: new Date()
    }
})

module.exports = mongoose.model('User', userSchema)