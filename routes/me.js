const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

// [GET] /me/stored/blogs
router.get('/stored/blogs', meController.storedBlogs);

module.exports = router;