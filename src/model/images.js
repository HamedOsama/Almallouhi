const mongoose = require('mongoose');

const imagesSchema = mongoose.Schema({
  images : {
    one:{
      type: String,
      required: true,
    },
    two:{
      type: String,
      required: true,
    },
    three:{
      type: String,
      required: true,
    },
    four:{
      type: String,
      required: true,
    },
  }
})

const Images = mongoose.model('images', imagesSchema);
module.exports = Images;