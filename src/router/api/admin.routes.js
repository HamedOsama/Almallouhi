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

//slider
router.route('/slider')
  .get(auth, adminController.getAllSliders)
  .post(auth, uploadImage.single('image'), adminController.addSlider)
router.route('/slider/:id')
  .patch(auth, uploadImage.single('image'), adminController.updateSlider)
  .delete(auth, adminController.deleteSlider)

// contacts 
router.route('/contacts')
  .get(auth, adminController.getContacts)
  .post(auth, adminController.addContact)
router.route('/contacts/:id')
  .patch(auth, adminController.updateContact)

module.exports = router;