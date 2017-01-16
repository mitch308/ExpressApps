var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');
var session = require('express-session');
var sha1 = require('sha1');

/* 登陆页 */
router.get('/', function(req, res, next) {
    res.render('admin/login', { title: '博客后台管理系统——mitch的博客'});
});

var adminModel = require('../../model/admin/admin');
router.post('/', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    adminModel.find(function(err, users){
        console.log(1);
    });
    // adminModel.findOne({username: username}, function(err, user) {
    //     console.log(111)
    //     if (err) { return done(err); }
    //     if (!user ||user.password != sha1(password + user.salt)) {
    //         res.json({success:false,errors:{username:'用户名或密码错误'}});
    //     }
    //     res.json({success:true,message:'登录成功'});
    // });
});

module.exports = router;