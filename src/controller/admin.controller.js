const factory = require('./handlerFactory');
const Home = require('../model/home');

const Admin = require('../model/admin')
const Contacts = require('../model/contacts')
const multer = require('multer')
const path = require('path')
const sendToken = require('../middleware/jwtToken');
const AboutUs = require('../model/aboutUs');
const OurMessage = require('../model/ourMessage');
const Images = require('../model/images');
const Uploads = multer({
  limits: {
    fileSize: 1000000
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|jfif)$/))
      return cb(new Error('please upload image !'))
    cb(null, true)
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const fullPath = path.join(__dirname, '../uploads')
      cb(null, fullPath)
    },
    filename: (req, file, cb) => {
      console.log(req.body);
      const fileName = Date.now().toString() + "_" + file.originalname
      cb(null, fileName)
    }
  }),
})

// admin
const signUp = async (req, res, next) => {
  try {
    const admin = new Admin(req.body)
    await admin.save()
    sendToken(admin, 201, res);
  }
  catch (e) {
    next(e);
  }
};

const login = async (req, res, next) => {
  try {
    const admin = await Admin.Login(req.body.email, req.body.password)
    sendToken(admin, 200, res);
  }
  catch (e) {
    next(e);
  }
}
const logout = async (req, res, next) => {
  try {
    req.admin.tokens = req.admin.tokens.filter(el => {
      return el != req.cookies.access_token;
    })
    await req.admin.save()


    res.status(200).clearCookie('access_token', {
      httpOnly: true,
      secure: true,
      path: '/',
      domain: '.tawyanoffice.com',
      sameSite: 'lax',
    }).json({
      ok: true,
      code: 200,
      message: 'succeeded',
    })
  }
  catch (e) {
    next(e);
  }
}
const auth = async (req, res, next) => {
  try {
    res.status(200).json({
      ok: true,
      code: 200,
      message: 'succeeded',
    })
  } catch (e) {
    next(e)
  }
}
const updateProfile = async (req, res, next) => {
  try {
    const Update = Object.keys(req.body)
    Update.forEach(el => { req.admin[el] = req.body[el] })


    await req.admin.save()
    res.status(200).json({
      ok: true,
      code: 200,
      message: 'succeeded',
      body: req.admin
    })
  }
  catch (e) {
    next(e)
  }
}

//Home

const getHome = factory.getOne(Home);
const updateHome = factory.updateOne(Home);

// about us
const getAboutUs = factory.getOne(AboutUs);
const updateAboutUs = factory.updateOne(AboutUs);

// our message
const getOurMessage = factory.getOne(OurMessage);
const updateOurMessage = factory.updateOne(OurMessage);

// images
const addImage = factory.createOne(Images);
const updateImage = factory.updateOne(Images);
const deleteImage = factory.deleteOne(Images);
const getAllImages = factory.getAll(Images);


// admin

//contacts
const getContacts = async (req, res, next) => {
  try {
    const contact = await Contacts.findOne({})
    res.status(200).json({
      ok: true,
      status: 200,
      message: 'succeeded',
      body: contact
    })
  }
  catch (e) {
    next(e)
  }
}
const updateContact = async (req, res, next) => {
  try {

    const contactId = req.params.id
    console.log(req.body)
    const contacts = await Contacts.findByIdAndUpdate({ _id: contactId }, req.body, {
      new: true,
      runValidators: true
    })
    if (!contacts)
      return res.status(404).send('not found')
    await contacts.save()
    return res.status(200).json({
      ok: true,
      status: 200,
      message: 'succeeded',
      body: contacts
    })
  }
  catch (e) {
    next(e)
  }
}



module.exports = {
  getContacts,
  updateContact,

  signUp,
  login,
  logout,
  auth,
  updateProfile,

  getHome,
  updateHome,
  getAboutUs,
  updateAboutUs,
  getOurMessage,
  updateOurMessage,
  getAllImages,
  addImage,
  updateImage,
  deleteImage,
}