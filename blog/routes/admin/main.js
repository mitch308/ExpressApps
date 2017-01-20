var express = require('express');
var router = express.Router();

/* 首页 */
router.get('/', function(req, res, next) {
    res.render('admin/main', {nickname: req.user.nickname});
});

module.exports = router;
