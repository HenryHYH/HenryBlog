var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Blog');

var Schema = mongoose.Schema;
var UserSchema = new Schema({
    Name: String,
    Age: Number
});

var User = mongoose.model('User', UserSchema, 'User2');

if (true) {
    var info = new User({ Name: 'ABC', Age: 100 });

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
