const express = require('express');
const router = express.Router();
const DashboardController = require('../controllers/DashboardController');
const auth = require('../middleware/auth');


router.post('/client', auth, DashboardController.client);
router.post('/admin', auth, DashboardController.admin);


module.exports = router;
