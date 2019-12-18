var express= require('express');
var Doctree_controller =require('./controller/Doctree_controller');
var Doctors_controller=require('./controller/Doctors_controller');
var app= express();

//set a template engine

app.set('view engine','ejs');

//static files

app.use(express.static('./public'));

Doctree_controller(app);
Doctors_controller(app);
app.listen(3000);
console.log('you server starts on:3000');