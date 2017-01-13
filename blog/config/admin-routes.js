module.exports = function(app){
    /*配置路由*/
    var index = require('../routes/admin');
    var login = require('../routes/admin/login');

    app.use('/admin', index);
    app.use('/admin/login', login);
};