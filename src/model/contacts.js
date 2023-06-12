const mongoose = require('mongoose')
const validator = require('validator')
const contactSchema = mongoose.Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        validate(value) {
            if (!validator.isEmail(value))
                throw new Error('please enter valid email')
        }
    },
    mainPhone: {
        type: String,
        trim: true,
        required: true,
    },
    subPhone: {
        type: String,
        trim: true,
        required: true,
    },
    address: {
        type: String,
        trim: true,
        required: true,
    },
    shortAddress: {
        type: String,
        trim: true,
        required: true,
    },
    postalCode:{
        type: String,
        trim: true,
        required: true,
    }
})
const Contact = mongoose.model('contact', contactSchema)
module.exports = Contact