
class SiteController {
  // [GET] /
  index(req, res) {
    res.render('home');
  }

  neighbor(req, res) {
    res.render('neighbor');
  }
}

module.exports = new SiteController();