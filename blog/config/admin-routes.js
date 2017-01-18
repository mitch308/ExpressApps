module.exports = function(app){
    /*登录验证*/
    app.use('/admin', function(req, res, next){
        if (/^\/(login|logout)$/.test(req.path) || req.isAuthenticated()) {
            next();
        } else {
            res.redirect('/admin/login');
        }
    });

    /*配置路由*/
    var index = require('../routes/admin/index');
    var login = require('../routes/admin/login');

    app.use('/admin/index', index);
    app.use('/admin/login', login);
};