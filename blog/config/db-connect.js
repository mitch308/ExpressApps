var mongoose=require('mongoose');

// 连接数据库
mongoose.Promise = global.Promise;
// 创建一个数据库连接
var db = mongoose.createConnection('mongodb://blog:mitch@localhost/blog');
// 连接失败
db.on('error', console.error.bind(console, 'connection error:'));
// 连接成功
db.once('open', function (callback) {
    console.log('connection success');
});

module.exports = db;
