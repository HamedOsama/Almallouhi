const mongoose = require('mongoose');

const aboutUsSchema = mongoose.Schema({
  images: [{
    one:
    {
      type: String,
      required: true,
      default : 'https://zjunior.com/images/logo.png'
    },
    two:
    {
      type: String,
      required: true,
      default : 'https://zjunior.com/images/logo.png'
    },
  }],
})

const AboutUs = mongoose.model('aboutUs', aboutUsSchema);
module.exports = AboutUs;