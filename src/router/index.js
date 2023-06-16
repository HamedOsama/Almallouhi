const { Router } = require('express');

const adminRoutes = require('./api/admin.routes');
const contactsRoutes = require('./api/contacts.routes');

const router = Router();

router.use('/admin', adminRoutes);
router.use('/contacts', contactsRoutes);
router.use('/home', require('./api/home.routes'));
router.use('/about-us', require('./api/aboutUs.routes'));
router.use('/our-message', require('./api/ourMessage.routes'));
router.use('/images', require('./api/images.routes'));
router.use('/upload', require('./api/upload.routes'));
router.use('/contact-us', require('./api/contactUs.routes'));
module.exports = router;