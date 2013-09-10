
/**
 * Module dependencies.
 */

var express = require('express')
  , db = require('./model/db')
  , routes = require('./routes')
  , user = require('./routes/user')
  , addData = require('./routes/addData')
  , addBooks = require('./routes/addBooks')
  , browseBooks = require('./routes/browseBooks')
  , deleteData = require('./routes/deleteData')
  , editBook = require('./routes/editBook')
  , editData = require('./routes/editData')
  , http = require('http')
  , path = require('path')
  , passport = require('passport')
  , LocalStrategy = require('passport-local')
  , FacebookStrategy = require('passport-facebook');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.cookieParser());
app.use(express.session({ secret: 'SECRET' }));
app.use(passport.initialize());
app.use(passport.session());


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/addBooks', addBooks.addBooks);
app.post('/addBook', addBooks.addBookPost);
app.get('/browseBooks', browseBooks.browseBooks);
app.get('/deleteBook/:id', deleteData.deleteBook);
app.get('/editBook/:id', editBook.editBook);
app.post('/editBook/:id', editBook.editBookPost);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
