const mongoose = require('mongoose');

const ourMessageSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: 'Our Message'
  },
  description: {
    type: String,
    required: true,
    default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
  image: {
    type: String,
    required: true,
    default: 'https://res.cloudinary.com/dzcma.../v162671.../ourMessage/ourMessage.jpg'
  }
})

const OurMessage = mongoose.model('ourMessage', ourMessageSchema);
module.exports = OurMessage;