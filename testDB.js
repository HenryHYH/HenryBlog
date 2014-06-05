var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/HenryDB');

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
    if (err)
        console.log('meow');
    console.log("saved");
});

console.log("Start");
