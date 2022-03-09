const express = require('express');
const router = express.Router();
const MessageController = require('../controllers/MessageController');


router.post('/envoyer', MessageController.envoyer);

module.exports = router;