
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var newPostRe = require('./routes/newPostRe');
var category = require('./routes/category');

var accSettings = require('./routes/accSettings');
var changePass = require('./routes/changePassword');

var about = require('./routes/about');
var help = require('./routes/help');

var login = require('./routes/login');
var loginForm = require('./routes/loginForm');
var signup = require('./routes/signup');
var signupForm = require('./routes/signupForm');
var forgotPass = require('./routes/forgotPass');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/newPostRe', newPostRe.pushPost);
app.get('/category/:id', category.viewCategory);

app.get('/Account_Settings', accSettings.viewAccSettings);
app.get('/changePassword', changePass.changePass);

app.get('/About', about.viewAbout);
app.get('/Help', help.viewHelp);

app.get('/Login', login.viewLogin);
app.get('/LoginFormSubmit', loginForm.submitLogin);
app.get('/Signup', signup.viewSignup);
app.get('/SignupFormSubmit', signupForm.submitSignup);
app.get('/Forgot_Password', forgotPass.viewForgotPass);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
