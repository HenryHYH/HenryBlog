var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/HenryDB');

var User = mongoose.model('User', { Name: String }, 'User');

if (false) {
    var info = new User({ Name: 'ABC' });

    info.save(function (err) {
        if (err)
            console.error(err);
        console.log("saved");
    });
}

User.find(function (err, list) {
    if (err)
        console.error(err);
    list.forEach(function (item) {
        console.log(item);
    });
});

console.log("Start");
