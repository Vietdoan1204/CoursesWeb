const express = require('express');
const router = express.Router();
const CourseController = require('../app/controllers/CourseController');

router.get('/create', CourseController.create);
router.get('/:slug', CourseController.detail);

module.exports = router;