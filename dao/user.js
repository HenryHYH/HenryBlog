var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var connectString = 'mongodb://127.0.0.1:27017/HenryDB';

var UserSchema = new Schema({
    Name: String,
    Age: Number
});

mongoose.model('User', UserSchema);
var User = mongoose.model('User');

exports.connect = function (callback) {
    mongoose.connect(connectString);
}

exports.disconnect = function (callback) {
    mongoose.disconnect(callback);
}

exports.setup = function (callback) {
    callback(null);
}

exports.add = function (name, callback) {
    var info = new User();
    info.Name = name;

    info.save(function (err) {
        if (err) {
            console.error(err);
            callback(err);
        }
        else {
            callback(null);
        }
    });
}

exports.delete = function (id, callback) {
    exports.findUserById(id, function (err, info) {
        if (err) {
            console.error(err);
            callback(err);
        }
        else {
            info.remove();
            callback(null);
        }
    });
}

exports.editName = function (id, name, callback) {
    exports.findUserById(id, function (err, info) {
        if (err) {
            console.error(err);
            callback(err);
        }
        else {
            info.Name = name;
            info.save(function (err) {
                if (err) {
                    console.error(err);
                    callback(err);
                }
                else {
                    callback(null);
                }
            });
        }
    });
}

exports.allUsers = function (callback) {
    User.find({}, callback);
}

exports.forAll = function (doEach, done) {
    User.find({}, function (err, list) {
        if (err) {
            console.error(err);
            done(err, null);
        }
        list.forEach(function (info) {
            doEach(null, info);
        });
        done(null);
    });
}

var findUserById = exports.findUserById = function (id, callback) {
    User.find({_id: id}, function (err, info) {
        if (err) {
            console.error(err);
            callback(err, null);
        }
        callback(null, info);
    });
}