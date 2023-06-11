const { Router } = require('express');

const homeController = require('../../controller/home.controller');

const router = Router();

router.get('/', homeController.getHome);

module.exports = router;