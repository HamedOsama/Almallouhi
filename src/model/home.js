const mongoose = require('mongoose')

const homeSchema = new mongoose.Schema({
  boxes: {
    box1: {
      title: {
        en: {
          type: String,
          trim: true,
          required: true,
          default: 'title'
        },
        ar: {
          type: String,
          trim: true,
          required: true,
          default: 'العنوان'
        }
      },
      description: {
        en: {
          type: String,
          trim: true,
          required: true,
          default: 'description'
        },
        ar: {
          type: String,
          trim: true,
          required: true,
          default: 'الوصف'
        }
      },
    },
    box2: {
      title: {
        en: {
          type: String,
          trim: true,
          required: true,
          default: 'title'
        },
        ar: {
          type: String,
          trim: true,
          required: true,
          default: 'العنوان'
        }
      },
      description: {
        en: {
          type: String,
          trim: true,
          required: true,
          default: 'description'
        },
        ar: {
          type: String,
          trim: true,
          required: true,
          default: 'الوصف'
        }
      },
    },
    box3: {
      title: {
        en: {
          type: String,
          trim: true,
          required: true,
          default: 'title'
        },
        ar: {
          type: String,
          trim: true,
          required: true,
          default: 'العنوان'
        }
      },
      description: {
        en: {
          type: String,
          trim: true,
          required: true,
          default: 'description'
        },
        ar: {
          type: String,
          trim: true,
          required: true,
          default: 'الوصف'
        }
      },
    },
  },
  products: [
    {
      title: {
        en: {
          type: String,
          trim: true,
          required: true,
          default: 'title'
        },
        ar: {
          type: String,
          trim: true,
          required: true,
          default: 'العنوان'
        }
      },
      image: {
        type: String,
        required: true,
        default: 'https://via.placeholder.com/150.jpg'
      },
    }
  ],
  news: [
    {
      description: {
        en: {
          type: String,
          trim: true,
          required: true,
          default: 'description'
        },
        ar: {
          type: String,
          trim: true,
          required: true,
          default: 'الوصف'
        }
      },
    }
  ]
})

const Home = mongoose.model('Home', homeSchema)

module.exports = Home