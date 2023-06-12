const { Router } = require('express');

const imagesController = require('../../controller/images.controller');

const router = Router();

router.get('/', imagesController.getImages);

module.exports = router;