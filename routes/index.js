const siteRouter = require('./site');
const blogRouter = require('./blogs');
const meRouter = require('./me'); // 1. Import meRouter

function route(app) {
    app.use('/blogs', blogRouter);
    app.use('/me', meRouter);     // 2. Nạp tuyến đường /me
    app.use('/', siteRouter);     // siteRouter luôn giữ ở cuối cùng
}

module.exports = route;