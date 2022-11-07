const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    dni: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        required: true
    },
    admininfo: {
        clients: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
        }],
        register: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'note',
        }]
    },
    appointment: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'appointment',
    }]
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel