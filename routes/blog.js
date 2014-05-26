var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('blog/index', {title: 'Blog', len: 20});
});

router.get('/create', function (req, res) {
    res.render('blog/add_edit');
});

router.get('/:id/edit', function (req, res) {
    res.render('blog/add_edit', {title: 'Blog'});
});

router.get('/:id', function (req, res) {
    res.render('blog/detail', {title: 'Blog', len: req.params.id});
});

module.exports = router;