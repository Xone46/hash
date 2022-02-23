const express = require('express');
const router = express.Router();
const ClientController = require('../controllers/ClientController');
const auth = require('../middleware/auth');

router.post('/login', ClientController.login);
router.post('/register', auth, ClientController.register);
router.post('/send', ClientController.send);
router.get('/show', ClientController.show);
router.get('/profile/:cid', ClientController.profile);
router.delete('/delete/:cid', ClientController.delete);
router.put('/update/:cid', ClientController.update);
router.put('/active/:cid', ClientController.active);
router.put('/desactive/:cid', ClientController.desactive);
router.get('/observations', ClientController.observation);
router.put('/observations/update/:oid', ClientController.lu)

module.exports = router;
