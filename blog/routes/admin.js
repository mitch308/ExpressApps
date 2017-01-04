var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
    next();
});


/* 首页 */
router.get('/', function(req, res, next) {
    res.redirect('admin/login');
    // res.render('index', { title: 'MY Blog' });
});

/* 登陆页 */
router.get('/login', function(req, res, next) {
    res.render('admin/login', { title: 'MY Blog' });
});

module.exports = router;
