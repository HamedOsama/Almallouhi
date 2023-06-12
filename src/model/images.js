const mongoose = require('mongoose');

const imagesSchema = mongoose.Schema({
  image: {
    type: String,
    required: true
  },
})

const Images = mongoose.model('images', imagesSchema);
module.exports = Images;