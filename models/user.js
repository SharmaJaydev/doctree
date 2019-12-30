var mongoose=require('mongoose');
var user_Schema=mongoose.Schema;
var passportLocalmongoose=require('passport-local-mongoose');
var User = new user_Schema({

    firstname:
    {
        type:String,
        require:true
    },
    lastname:
    {
        type:String,
        require:true
    },
    repeat_password:
    {
        type:String,
        require:true
    }

});

User.plugin(passportLocalmongoose);
module.exports=mongoose.model('User',User);