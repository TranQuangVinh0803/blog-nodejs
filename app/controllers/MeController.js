class MeController {
    // [GET] /me/stored/blogs
    storedBlogs(req, res, next) {
        res.render('me/stored-blogs'); // Hoặc tên file view bài viết của bạn
    }
}

module.exports = new MeController();