const validator = require('validator');
const isEmpty = require('./is-Empty');

module.exports = function validateSignupInput(data){
    let errors = {};
    data.firstname = !isEmpty(data.firstname) ? data.firstname : '';
    data.lastname = !isEmpty(data.lastname) ? data.lastname : '';
    data.username = !isEmpty(data.username) ? data.username : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';

    
    if(validator.isEmpty(data.firstname)){
        errors.firstname = 'required ?'
    }
    if(validator.isEmpty(data.lastname)){
        errors.lastname = ' required ?'
    }
    if(validator.isEmpty(data.username)){
        errors.username = 'required ?'
    }
    if(!validator.isEmail(data.username)){
        errors.username= 'invalid ?'
    }
    if(validator.isEmpty(data.password)){
        errors.password = 'required ?'
    }
    if(!validator.isLength(data.password, { min: 6, max: 30 })){
        errors.password = 'Password must be between 6 to 30 characters'
    }
    if(!validator.equals(data.password, data.password2)){
        errors.password2 = 'Passwords must match'
    }
    if(validator.isEmpty(data.password2)){
        errors.password2 = 'required ?'
    }
    

    return{
        errors,
        isValid: isEmpty(errors)
    }
}