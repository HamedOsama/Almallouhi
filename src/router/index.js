const { Router } = require('express');

const sliderRoutes = require('./api/slider.routes');
const adminRoutes = require('./api/admin.routes');
const contactsRoutes = require('./api/contacts.routes');

const router = Router();

router.use('/slider', sliderRoutes);
router.use('/admin', adminRoutes);
router.use('/contacts', contactsRoutes);
router.use('/home', require('./api/home.routes'));

module.exports = router;