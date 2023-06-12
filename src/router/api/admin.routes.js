const { Router } = require('express');

const adminController = require('../../controller/admin.controller');
const auth = require('../../middleware/auth');
const uploadImage = require('../../utils/uploadImage');

const router = Router();

// auth 
router.post('/signup', adminController.signUp)
router.post('/login', adminController.login)
router.post('/logout', auth, adminController.logout)
router.get('/auth', auth, adminController.auth)
router.patch('/', auth, adminController.updateProfile)

//home 
router.route('/home')
  .get(auth, adminController.getHome)
router.route('/home/:id')
  .patch(auth, adminController.updateHome)

//about us
router.route('/about-us')
  .get(auth, adminController.getAboutUs)
router.route('/about-us/:id')
  .patch(auth, adminController.updateAboutUs)

//our message
router.route('/our-message')
  .get(auth, adminController.getOurMessage)
router.route('/our-message/:id')
  .patch(auth, adminController.updateOurMessage)

//images
router.route('/images')
  .get(auth, adminController.getAllImages)
  .post(auth, adminController.addImage)
router.route('/images/:id')
  .patch(auth, adminController.updateImage)
  .delete(auth, adminController.deleteImage)


// contacts 
router.route('/contacts')
  .get(auth, adminController.getContacts)
router.route('/contacts/:id')
  .patch(auth, adminController.updateContact)

module.exports = router;