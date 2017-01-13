var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');
var session = require('express-session');
var sha1 = require('sha1');
var data={
    title:'登录',
    'webSiteName':'ExpressBlog'
};

/* 登陆页 */
router.get('/', function(req, res, next) {
    console.log('login');
    res.render('admin/login', { title: 'MY Blog' });
});

module.exports = router;