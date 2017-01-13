var express = require('express');
var router = express.Router();
// var cookieParser = require('cookie-parser');
// var session = require('express-session');

/*-------------------数据库相关----------------------------*/

/*引入Schema配置文件*/
// var userSchemaConf=require('../schema/userSchema.js');
/*生成一个schema*/
// var userSchema  = new mongoose.Schema(userSchemaConf);
/*根据schema生成模型*/
// var userModel = db.model('user',userSchema);
/*-------------------数据库相关----------------------------*/


/* 首页 */
router.get('/', function(req, res, next) {
    // res.redirect('admin/login');
    res.render('index', { title: 'MY Blog' });
});

module.exports = router;
