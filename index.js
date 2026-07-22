const express = require('express');
const morgan = require('morgan'); // 1. Bổ sung của thầy: Khai báo morgan
const { engine } = require('express-handlebars'); // BỔ SUNG BUỔI 3: Khai báo Handlebars

const app = express();
const port = 3000;

// 2. Bổ sung của thầy: Tích hợp morgan vào app để ghi nhật ký hệ thống
app.use(morgan('combined'));

// BỔ SUNG BUỔI 3: Cấu hình Static Files & Template Engine Handlebars
app.use(express.static('public')); // Cấp quyền truy cập thư mục public (chứa css)
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', './views'); // Chỉ định thư mục chứa giao diện views

// ==========================================
// 🚨 BỔ SUNG BUỔI 05: MIDDLEWARE XỬ LÝ FORM DATA
// (Bắt buộc phải đặt trên tất cả các Route điều hướng)
// ==========================================
app.use(express.urlencoded({
    extended: true
})); // Dùng để phân giải dữ liệu từ Form HTML thông thường
app.use(express.json()); // Dùng để phân giải dữ liệu dạng JSON

// ==========================================
// ROUTES CƠ BẢN (BUỔI 1, 3)
// ==========================================

// Route Trang Chủ
app.get('/', (req, res) => {
    res.render('home');
});

// Route Bài Tập hiển thị thông tin cá nhân
app.get('/gioi-thieu', (req, res) => {
    res.send(`
    <h1>Thông Tin Sinh Viên</h1>
    <p><b>Họ và tên:</b> Trần Quang Vinh</p>
    <p><b>MSSV:</b> 2306022026 </p>
    <p><b>Ngành học:</b> Tin Học Ứng Dụng (IT)</p>
    <p><b>Lớp:</b> Lập trình Web Nâng Cao- Buổi 1</p>
  `);
});

// ==========================================
// BỔ SUNG BUỔI 04: ROUTING & QUERY PARAMETERS
// ==========================================

// Route xử lý cho trang About
app.get('/about', (req, res) => {
    res.render('about');
});

// Route xử lý cho trang Liên hệ
app.get('/contact', (req, res) => {
    res.render('contact');
});

// Route hiển thị trang Tìm kiếm & Bắt dữ liệu người dùng nhập vào
app.get('/search', (req, res) => {
    console.log("-----------------------------------------");
    console.log("Từ khóa tìm kiếm nhận được (q):", req.query.q);
    console.log("Loại tìm kiếm nhận được (type):", req.query.type);
    console.log("-----------------------------------------");
    res.render('search');
});

// ==========================================
// 🎯 BỔ SUNG BUỔI 05: XỬ LÝ FORM ĐĂNG BÀI & LOGIN
// ==========================================

// --- CHỨC NĂNG ĐĂNG BÀI BLOG ---
// GET: Hiển thị trang tạo bài viết
app.get('/blogs/create', (req, res) => {
    res.render('create');
});

// POST: Hứng dữ liệu từ form Đăng bài gửi lên
app.post('/blogs/create', (req, res) => {
    console.log("-----------------------------------------");
    console.log("Dữ liệu nhận được từ Form Đăng bài:", req.body);
    console.log("-----------------------------------------");
    res.json(req.body); // Trả dữ liệu về trình duyệt dưới dạng JSON để kiểm tra
});

// --- CHỨC NĂNG ĐĂNG NHẬP (BÀI TẬP THỰC HÀNH) ---
// GET: Hiển thị trang đăng nhập
app.get('/login', (req, res) => {
    res.render('login');
});

// POST: Xử lý logic kiểm tra tài khoản mật khẩu
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    console.log("-----------------------------------------");
    console.log("Thử đăng nhập với tài khoản:", username);
    console.log("-----------------------------------------");

    if (username === 'admin' && password === '123456') {
        console.log("👉 Đăng nhập thành công!");
        res.send("Đăng nhập thành công!");
    } else {
        console.log("❌ Sai tài khoản hoặc mật khẩu!");
        res.send("Sai tài khoản hoặc mật khẩu!");
    }
});

// Kích hoạt Server
app.listen(port, () => {
    console.log(`Server đang chạy cực mượt tại: http://localhost:${port}`);
});