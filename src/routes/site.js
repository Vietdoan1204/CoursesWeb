const express = require('express');
const router = express.Router();
const SiteController = require('../app/controllers/SiteController');

router.get('/', SiteController.home);
router.get('/neighbor', SiteController.neighbor);

module.exports = router;