var express = require('express');
var router = express.Router();
var session = require('express-session');
var cookieParser = require('cookie-parser');
var sha1 = require('sha1');

/* 登陆页 */
router.get('/', function(req, res, next) {
    if (req.session.user_id) res.redirect('/admin/index');
    res.render('admin/login', { title: '博客后台管理系统——mitch的博客'});
});

// 获取model
adminModel = require('../../model/admin/admin');

router.post('/', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    adminModel.findOne({username: username, isdel: false, isusing: true}, function(err, user) {
        if (err) return done(err);
        if (!user ||user.password != sha1(password + user.salt)) {
            res.json({success:false,errors:{username:'用户名或密码错误'}});
        } else {
            req.session.user_id = user._id;
            req.session.username = user.username;
            req.session.nickname = user.nickname;
            req.session.role_id = user.role_id;

            res.json({success:true,message:'登录成功'});
        }
    });
});

module.exports = router;