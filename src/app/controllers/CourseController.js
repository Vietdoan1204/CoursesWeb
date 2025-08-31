const Course = require('../models/Course');
const {mongooseToObject, multipleMongooseToObject} = require('../../util/mongoose');

class CourseController {
  //[GET] /courses/:slug
  detail(req, res, next) {
    Course.findOne({slug: req.params.slug})
      .then(course => {
        res.render('courses/detailCourse', {
          course: mongooseToObject(course)
        });
      })
      .catch(next);

  }

   // [GET] /courses/create
  create(req, res, next) {
    res.render('courses/createCourse');
  }

  //[POST] /courses/store
  store(req, res, next) {
     const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
            .catch(next);
  }

  //[GET] /courses/:id/edit
  edit(req, res, next){
    Course.findById(req.params.id)
      .then(course => {
        res.render('courses/editCourse', {
          course: mongooseToObject(course)
        });
      })
      .catch(next);
  }

  //[PUT] /courses/:id/edit
  update(req, res, next){
      Course.updateOne({_id: req.params.id}, req.body)
        .then(() => res.redirect('/me/stored/courses'))
        .catch(next);
  }

  //[DELETE] /courses/:id
  destroy(req, res, next){
      Course.deleteOne({_id: req.params.id})
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  }
  
}

module.exports = new CourseController();