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
    var blog = {
        Title: 'Title',
        Content: '<p>Content content</p><p>Content</p>',
        CntRead: 1,
        Comments: []
    };

    for (var i = 1; i <= 10; i++) {
        blog.Comments.push({
            Author: 'Henry',
            Comment: 'Hello world',
            CreateTime: new Date().format() // format(new Date())
        });
    }

    res.render('blog/detail', {title: blog ? blog.Title : 'Blog', blog: blog});
});

Number.prototype.pad = function (n) {
    var num = this;
    return Array(n - ('' + num).length + 1).join(0) + num;
}

Date.prototype.format = function () {
    var dt = this;
    return dt.getFullYear().pad(4) + '-' + (dt.getMonth() + 1).pad(2) + '-' + dt.getDay().pad(2)
        + ' ' + dt.getHours().pad(2) + ':' + dt.getMinutes().pad(2);
}

module.exports = router;