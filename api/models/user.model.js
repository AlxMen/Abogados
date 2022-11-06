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
        //unique: true
    },
    phone: {
        type: Number,
        required: true,
        //unique: true
    },
    email: {
        type: String,
        required: true,
        //unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['usuario', 'admin'],
        required: true
    },
    admininfo: {
        clients: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
        }],
        register: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'nota',
        }]
    },
    citas: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cita',
    }]
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel