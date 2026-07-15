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

// Route Trang Chủ (Đã sửa từ res.send thành res.render để chạy giao diện mẫu)
app.get('/', (req, res) => {
    res.render('home');
});

// Route Bài Tập hiển thị thông tin cá nhân của ông
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
    // req.query chứa toàn bộ các parameters trên URL
    console.log("-----------------------------------------");
    console.log("Từ khóa tìm kiếm nhận được (q):", req.query.q);
    console.log("Loại tìm kiếm nhận được (type):", req.query.type); // BẮT THÊM BIẾN TYPE
    console.log("-----------------------------------------");

    res.render('search');
});

// Kích hoạt Server
app.listen(port, () => {
    console.log(`Server đang chạy cực mượt tại: http://localhost:${port}`);
});