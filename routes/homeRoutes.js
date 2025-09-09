const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.post('/header-config', homeController.getHeaderConfig);
router.get('/banner', homeController.getBanner);
router.post('/destinations', homeController.getDestinations);

module.exports = router;
