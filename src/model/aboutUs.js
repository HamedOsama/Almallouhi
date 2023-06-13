const mongoose = require('mongoose');

const aboutUsSchema = mongoose.Schema({
  images: [{
    one:
    {
      type: String,
      required: true
    },
    two:
    {
      type: String,
      required: true
    },
  }],
})

const AboutUs = mongoose.model('aboutUs', aboutUsSchema);
module.exports = AboutUs;