var express = require('express');
var router = express.Router();

/* 首页 */
router.get('/', function(req, res, next) {
    req.logout();
    res.redirect('/admin/login');
});

module.exports = router;
