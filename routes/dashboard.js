const express = require('express');
const router = express.Router();
const DashboardController = require('../controllers/DashboardController');
const auth = require('../middleware/auth');


router.post('/', auth, DashboardController.index);


module.exports = router;
