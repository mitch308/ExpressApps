var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminSchema = new Schema({
    _id: ObjectId,
    username: {type: String, required: '用户名不能为空'},
    password: {type: String, required: '密码不能为空'},
});