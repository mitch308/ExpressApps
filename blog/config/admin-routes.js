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
    var main = require('../routes/admin/main');
    var login = require('../routes/admin/login');
    var logout = require('../routes/admin/logout');

    app.use('/admin/main', main);
    app.use('/admin/login', login);
    app.use('/admin/logout', logout);
};