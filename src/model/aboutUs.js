const mongoose = require('mongoose');

const aboutUsSchema = mongoose.Schema({
  images: [{
    type: String,
    required: true
  }],
  slider: [{
    type: String,
    required: true
  }],
})

const AboutUs = mongoose.model('aboutUs', aboutUsSchema);
module.exports = AboutUs;