var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('gallery', {title: '相册', len: 20});
});

router.get('/:id', function (req, res) {
    res.render('gallery', {title: '相册', len: req.params.id});
});

module.exports = router;