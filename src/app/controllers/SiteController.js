const Course = require('../models/Course');
const {multipleMongooseToObject} = require('../../util/mongoose');

class SiteController {
  home(req, res, next) {
    Course.find({})
      .then(courses => {
        res.render('home', {
          courses: multipleMongooseToObject(courses)
        });
      })
      .catch(next);

  }

  neighbor(req, res) {
    res.render('neighbor');
  }
}

module.exports = new SiteController();