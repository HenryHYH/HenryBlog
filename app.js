var
// favicon = require('static-favicon'),
// logger = require('morgan'),
// cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    path = require('path'),
    ejs = require('ejs'), // ejs template
    partials = require('express-partials'), // support partials
    express = require('express'),
    app = express();

var routes = require('./routes/index'),
    test = require('./routes/test'),
    blog = require('./routes/blog'),
    users = require('./routes/users'),
    gallery = require('./routes/gallery');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
partials.register('.html', ejs);


// 将 ejs 的标签由原来的 <% %> 改为 {{ }}
ejs.open = '{{';
ejs.close = '}}';

// 加载 express-partials middleware
app.use(partials());

//app.use(favicon());
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/test', test);
app.use('/blog', blog);
app.use('/gallery', gallery);

/// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            layout: false,
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        layout: false,
        message: err.message,
        error: {}
    });
});

// app.set('env', 'production');

var server = app.listen(18080, function () {
    console.log("Server Start! Port = " + server.address().port + ';');
    console.log(app.get('env'));
});

module.exports = app;