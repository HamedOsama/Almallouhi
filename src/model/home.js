const mongoose = require('mongoose')

const homeSchema = new mongoose.Schema({
  boxes: {
    box1: {
      title: {
        type: String,
        required: true,
        default: 'title'
      },
      description: {
        type: String,
        required: true,
        default: 'description'
      },
    },
    box2: {
      title: {
        type: String,
        required: true,
        default: 'title'
      },
      description: {
        type: String,
        required: true,
        default: 'description'
      },
    },
    box3: {
      title: {
        type: String,
        required: true,
        default: 'title'
      },
      description: {
        type: String,
        required: true,
        default: 'description'
      },
    },
  },
  products: [
    {
      title: {
        type: String,
        required: true,
        default: 'title'
      },
      image: {
        type: String,
        required: true,
        default: 'image'
      },
    }
  ],
  news: [
    {
      description: {
        type: String,
        required: true,
        default: 'description'
      }
    }
  ]
})

const Home = mongoose.model('Home', homeSchema)

module.exports = Home