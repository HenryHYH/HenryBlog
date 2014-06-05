var express = require('express'),
    router = express.Router(),
    userDao = require('../dao/user');

/* GET home page. */
router.get('/', function (req, res) {
    userDao.allUsers(function (err, users) {
        if (err) {
            console.error(err);
        }
        else {
            console.log(users);
        }
    });

    res.render('index', {
        title: 'Express',
        len: 50,
        blogs: [1, 2, 3]
    });
});

module.exports = router;
