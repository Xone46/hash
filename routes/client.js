const express = require('express');
const router = express.Router();
const ClientController = require('../controllers/ClientController');
const auth = require('../middleware/auth');

router.post('/login', ClientController.login);
router.use(ClientController, auth);
router.post('/register', ClientController.register);
router.get('/show',auth , ClientController.show);
router.get('/profile/:cid',auth , ClientController.profile);
router.delete('/delete/:cid',auth , ClientController.delete);
router.put('/update/:cid',auth , ClientController.update);
router.put('/active/:cid',auth , ClientController.active);
router.put('/desactive/:cid',auth , ClientController.desactive)

module.exports = router;
