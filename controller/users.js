var express=require('express');
var mongoose=require('mongoose');
// const bodyParser= require('body-parser');
var User=require('../models/user');

var router=express.Router();
var passport=require('passport');
var authenticate = require('../authenticate');
const validateSignupInput = require('../validations/Sign_Up');
const validateLoginInput = require('../validations/login');
// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({urlencoded:false}));
router.get('/Sign_Up',function(req,res,next)
{
  res.render('reg_form/Sign_Up' ,{errors:{username:null}});

});

// router.post('/form',(req,res)=>{
//   console.log(req.body);
//   res.send(req.body);
// });

router.post('/Sign_Up', (req, res, next) => {
  // console.log(req.body);
  let { errors, isValid } = validateSignupInput(req.body);

  //check validation
  if(!isValid){
    return res.status(400).render('reg_form/Sign_Up',{errors:errors});
  }
  const user=new User({username:req.body.username,firstname:req.body.firstname,lastname:req.body.lastname});
  User.register(user, 
    req.body.password,(err, user) => {
    if(err) {
      errors.username = 'Email already Exists';
      return res.status(400).render('reg_form/Sign_Up',{errors:errors});
    }
    else {
      passport.authenticate('local')(req, res, () => {
        res.statusCode = 200;
        res.redirect('/users/Login');
      });
    }
  });
});
router.get('/Login',function(req,res,next)
{
  res.render('reg_form/Login' ,{errors:{username:null}}); 
});
router.post('/Login',passport.authenticate('local'),function(req,res,next)
  {
    var token = authenticate.getToken({_id: req.user._id});
   res.statusCode = 200;
   res.redirect('/Doctree_index');
  }
);


    router.get('/logout', (req, res) => {
      if (req.session) {
        req.session.destroy();
        res.clearCookie('session-id');
        res.redirect('/');
      }
      else {
        var err = new Error('You are not logged in!');
        err.status = 403;
        next(err);
      }
    });
    module.exports=router;