class SiteController {
    // [GET] /
    index(req, res) {
        res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }

    // [GET] /contact
    contact(req, res) {
        res.render('contact');
    }

    // [GET] /about
    about(req, res) {
        res.render('about');
    }

    // [GET] /login
    login(req, res) {
        res.render('login');
    }
}

module.exports = new SiteController();