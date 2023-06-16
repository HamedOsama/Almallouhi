const { Router } = require('express');

const contactUsController = require('../../controller/contactUs.controller');

const router = Router();

router.post('/', contactUsController.addContactUs);

module.exports = router;