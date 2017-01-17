module.exports = function(app){
    var isAuthenticated = function (req,res,next) { 
        if (req.isAuthenticated()) return next(); 
        res.redirect('/login');
    };
    
    /*配置路由*/
    var index = require('../routes/admin/index');
    var login = require('../routes/admin/login');

    app.use('/admin/index', index);
    app.use('/admin/login', login);
};