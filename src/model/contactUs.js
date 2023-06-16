const mongoose = require('mongoose')
const contactUs = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: Number,
    default: 0
  },
}, {
  timestamps: true
})
const ContactUs = mongoose.model('contactUs', contactUs)
module.exports = ContactUs