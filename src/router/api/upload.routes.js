const { Router } = require('express');
const { uploadImageController, uploadImage } = require('../../utils/uploadImage');

const router = Router();

router.route('/').post(uploadImage.single('file'), uploadImageController);

module.exports = router;