module.exports = function(app){
    /*配置路由*/
    var index = require('../routes/blog');

    app.use('/', index);
};