var mongoose = require('mongoose');

// 创建salt
function createSalt() {
    var str = '1234567890abcdefghijklmnopqrstuvwxyz';
    var length = 4;
    var strLen = str.length;
    var salt = '';
    var random = '';
    for (var i = 0;i < length; i++) {
        random = parseInt(Math.random() * strLen);
        salt += str[random];
    }
    return salt;
}

var Schema = mongoose.Schema;

var ObjectId = mongoose.Schema.Types.ObjectId;
var adminSchema = new Schema({
    _id: ObjectId,
    username: {type: String, required: '用户名不能为空'},
    password: {type: String, required: '密码不能为空'},
    nickname: {type: String, required: '昵称不能为空'},
    role_id: ObjectId,
    salt: {type: String, default: createSalt},
    addtime: {type: Date, default: Date.now},
    isusing: {type: Boolean, default: true},
    isdel: {type: Boolean, default: false},
});

var adminModel = mongoose.model('admin',adminSchema);

module.exports = adminModel;