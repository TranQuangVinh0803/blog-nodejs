const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

// Nạp trạm trung chuyển Routes (Buổi 06 & 07)
const route = require('./routes');

// Logger Middleware
app.use(morgan('combined'));

// Static Files & Handlebars Template Engine
app.use(express.static(path.join(__dirname, 'public')));
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Middleware xử lý Form Data & JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ==========================================
// 🚀 KHỞI TẠO HỆ THỐNG ROUTE (MVC ARCHITECTURE)
// ==========================================
route(app);

// Kích hoạt Server
app.listen(port, () => {
    console.log(`Server đang chạy cực mượt tại: http://localhost:${port}`);
});