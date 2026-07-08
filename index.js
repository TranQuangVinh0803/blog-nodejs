const express = require('express');
const morgan = require('morgan'); // 1. Bổ sung của thầy: Khai báo morgan

const app = express();
const port = 3000;

// 2. Bổ sung của thầy: Tích hợp morgan vào app để ghi nhật ký hệ thống
app.use(morgan('combined'));

// Route Trang Chủ
app.get('/', (req, res) => {
    res.send('Chào mừng đến với Blog cá nhân của tôi!');
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

// Kích hoạt Server
app.listen(port, () => {
    console.log(`Server đang chạy cực mượt tại: http://localhost:${port}`);
});