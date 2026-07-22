const express = require('express');
const router = express.Router();
const blogController = require('../app/controllers/BlogController');

// Xử lý trang Đăng bài
router.get('/create', blogController.create);
router.post('/create', blogController.store);

// Xử lý trang Đăng nhập
router.get('/login', blogController.showLogin);
router.post('/login', blogController.login);

module.exports = router;