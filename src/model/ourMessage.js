const mongoose = require('mongoose');

const ourMessageSchema = mongoose.Schema({
  title: {
    en: {
      type: String,
      trim: true,
      required: true,
      default: 'Our Message'
    },
    ar: {
      type: String,
      trim: true,
      required: true,
      default: 'رسالتنا'
    }
  },
  description: {
    en: {
      type: String,
      trim: true,
      required: true,
      default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    ar: {
      type: String,
      trim: true,
      required: true,
      default: 'لوريم ايبسوم دولار سيت اميت'
    }
  },
  image: {
    type: String,
    required: true,
    default: 'https://res.cloudinary.com/dzcma.../v162671.../ourMessage/ourMessage.jpg'
  }
})

const OurMessage = mongoose.model('ourMessage', ourMessageSchema);
module.exports = OurMessage;