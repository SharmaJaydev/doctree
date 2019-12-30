var express= require('express');
var Doctree_controller =require('./controller/Doctree_controller');
var Doctors_controller=require('./controller/doctors');
var app= express();
const ejsLint = require('ejs-lint');
const createError=require('http-errors');
var bodyparsar= require('body-parser');
var session=require('express-session');
var FileStore=require('session-file-store')(session);
var passport=require('passport');
var authenticate=require('./authenticate');
const usersRouter=require('./controller/users.js');
const doctorsRouter=require('./controller/doctors.js');
const mongoose=require('mongoose');
var config=require('./config');

//stop
//set a template engine

app.set('view engine','ejs');

//static files
app.use(express.static('./public'));
Doctree_controller(app);
const url=config.mongoUrl;
const Con_connect=mongoose.connect(url);
Con_connect.then((db)=>
{
    console.log('connect to the server 👍');

},(err)=>{console.log(err);});
//stop
app.set('view engine','ejs');
app.use(express.static('./public'));
app.use(bodyparsar.json());
app.use(bodyparsar.urlencoded({urlencoded:false}));
app.use(passport.initialize());
Doctors_controller(app);
app.use('/users',usersRouter);
app.use(function(req, res, next) {
    next(createError(404));
  });


app.listen(3000);
console.log('you server starts on:3000');
module.exports=app;