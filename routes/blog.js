var express = require('express'),
    router = express.Router();
require('../common/extension');

function MockData(cnt) {
    cnt = cnt || 20;

    var list = [];

    for (var i = 0; i < cnt; i++) {
        list.push({
            Id: i,
            Title: 'Title' + i,
            Content: '<p>Hello world</p><p>Hello world</p>',
            Description: 'Hello world<br />Hello world',
            CntRead: i,
            Author: 'Henry',
            CreateTime: new Date(),
            Category: 'Category',
            Tags: ['Tag A', 'Tag B'],
            CntComment: i
        });
    }

    return list;
}

// index
router.get('/', function (req, res) {
    var list = MockData();

    res.render('blog/index', {
        title: 'Blog',
        list: list
    });
});

// add
router.get('/create', function (req, res) {
    var url = req.originalUrl;
    if (url.indexOf('?') != -1)
        url = url.substr(0, url.indexOf('?'));

    res.render('blog/add_edit', {title: 'Blog', formAction: url});
});

router.post('/create', function (req, res) {
    var title = req.param('title');

    res.render('index', {title: title, len: 2});
});

// edit
router.get('/:id/edit', function (req, res) {
    var url = req.originalUrl;
    if (url.indexOf('?') != -1)
        url = url.substr(0, url.indexOf('?'));

    var blog = MockData(1)[0];

    res.render('blog/add_edit', {
        title: 'Blog',
        formAction: url,
        blog: blog
    });
});

router.post('/:id/edit', function (req, res) {
    var title = req.param('title');

    res.render('index', {title: title, len: req.param('id')});
});

// detail
router.get('/:id', function (req, res) {
    var blog = {
        Id: req.param('id'),
        Title: 'Title',
        Content: '<p>Content content</p><p>Content</p>',
        CntRead: 1,
        Comments: [],
        Category: 'Category',
        Tags: ['Tag A', 'Tag B']
    };

    for (var i = 1, iMax = req.param('id'); i <= iMax; i++) {
        blog.Comments.push({
            Author: 'Henry',
            Comment: 'Hello world',
            CreateTime: new Date()
        });
    }

    res.render('blog/detail', {
        title: blog ? blog.Title : 'Blog',
        blog: blog
    });
});

// search by category
router.get('/category/:category', function (req, res) {
    var list = MockData(5);

    res.render('blog/index', {
        title: req.param('category'),
        list: list
    });
});

// search by tag
router.get('/tag/:tag', function (req, res) {
    var list = MockData(1);

    res.render('blog/index', {
        title: req.param('tag'),
        list: list
    });
});

module.exports = router;