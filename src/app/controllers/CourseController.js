const Course = require('../models/Course');
const {mongooseToObject, multipleMongooseToObject} = require('../../util/mongoose');

class CourseController {

  detail(req, res, next) {
    Course.findOne({slug: req.params.slug})
      .then(course => {
        res.json(mongooseToObject(course));
      })
      .catch(next);

  }

  create(req, res, next) {
    res.render('courses/createCourse');
  }
}

module.exports = new CourseController();