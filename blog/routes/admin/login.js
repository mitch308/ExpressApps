var express = require('express');
var router = express.Router();
var sha1 = require('sha1');

/* 登陆页 */
router.get('/', function(req, res, next) {
    // 判断用户是否登录
    if (req.isAuthenticated()) return res.redirect('/admin/index');
    res.render('admin/login');
});

// 获取model
adminModel = require('../../model/admin/admin');

// passport验证
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(
    function(username, password, done) {
        adminModel.findOne({username: username, isdel: false, isusing: true}, function(err, user) {
            if (err) { return done(err); }
            if (!user || user.password !== sha1(password+user.salt)) { return done(null, false); }
            return done(null, user);
        });
    }
));
passport.serializeUser(function(user, done){
    done(null, user._id);
});

passport.deserializeUser(function(user_id, done){
    adminModel.findOne({_id: user_id}, {username: true, nickname: true, role_id: true}, function(err, user){
        if (err) { return done(err); }
        done(null, user);
    });
});

/* 登录验证 */
router.post('/', passport.authenticate('local'), function(req, res, next) {
    if (req.isAuthenticated()) {
        res.json({success:true,message:'登录成功'});
    } else {
        res.json({success:false,errors:{username:'用户名或密码错误'}});
    }
});

module.exports = router;