const { Router } = require('express');

const ourMessageController = require('../../controller/ourMessage.controller');

const router = Router();

router.get('/', ourMessageController.getOurMessage);

module.exports = router;