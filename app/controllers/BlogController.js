class BlogController {
    // [GET] /blogs/create (Giao diện đăng bài)
    create(req, res) {
        res.render('create');
    }

    // [POST] /blogs/create (Xử lý form đăng bài)
    store(req, res) {
        console.log('Dữ liệu nhận được từ Form Đăng bài:', req.body);
        res.json(req.body);
    }

    // [GET] /login (Giao diện đăng nhập)
    showLogin(req, res) {
        res.render('login');
    }

    // [POST] /login (Xử lý form đăng nhập)
    login(req, res) {
        const { username, password } = req.body;
        if (username === 'admin' && password === '123456') {
            console.log("Đăng nhập thành công");
            res.send("Đăng nhập thành công!");
        } else {
            console.log("Sai tài khoản hoặc mật khẩu");
            res.send("Sai tài khoản hoặc mật khẩu!");
        }
    }
}

module.exports = new BlogController();