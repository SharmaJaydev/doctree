const validator = require('validator');
const isEmpty = require('./is-Empty');

module.exports = function validateLoginInput(data){
    let errors = {};

    data.username = !isEmpty(data.username) ? data.username : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    if(!validator.isEmail(data.username)){
        errors.username= 'Email is invalid'
    }
    if(validator.isEmpty(data.username)){
        errors.username= 'Email is required'
    }
    if(validator.isEmpty(data.password)){
        errors.password = 'Password is required'
    }

    return{
        errors,
        isValid: isEmpty(errors)
    }
}