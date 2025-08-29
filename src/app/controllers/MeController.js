const Course = require('../models/Course');
const {mongooseToObject, multipleMongooseToObject} = require('../../util/mongoose');

class MeController {
  
  storedCourses(req, res, next) {
    Course.find({})
      .then(courses => {
        res.render('me/stored-courses', {
          courses: multipleMongooseToObject(courses)
        });
      })
      .catch(next);
      // .then(result => res.json(result))
  }

}

module.exports = new MeController();