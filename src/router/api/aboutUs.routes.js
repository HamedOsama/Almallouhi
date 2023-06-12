const { Router } = require('express');

const aboutUsController = require('../../controller/aboutUs.controller');

const router = Router();

router.get('/', aboutUsController.getAboutUs);

module.exports = router;