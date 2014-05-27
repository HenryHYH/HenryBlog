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
    res.render('blog/add_edit');
});

router.post('/create', function (req, res) {
});

// edit
router.get('/:id/edit', function (req, res) {
    res.render('blog/add_edit', {title: 'Blog'});
});

router.get('/:id/edit', function (req, res) {
});

// detail
router.get('/:id', function (req, res) {
    var blog = {
        Title: 'Title',
        Content: '<p>Content content</p><p>Content</p>',
        CntRead: 1,
        Comments: [],
        Category: 'Category',
        Tags: ['Tag A', 'Tag B']
    };

    for (var i = 1; i <= req.params.id; i++) {
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
        title: req.params.category,
        list: list
    });
});

// search by tag
router.get('/tag/:tag', function (req, res) {
    var list = MockData(1);

    res.render('blog/index', {
        title: req.params.tag,
        list: list
    });
});

module.exports = router;