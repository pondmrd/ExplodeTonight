const Joi = require('@hapi/joi');

const registerValidation = (data) =>{
    const schema = Joi.object({
        username: Joi.string().required().min(6),
        Firstname: Joi.string().required(),
        email: Joi.string().required().email(),
        gender: Joi.string(),
        password: Joi.string().required()
    });
    return schema.validate(data);
} 

const loginValidation = (data) =>{
    const schema = Joi.object({
        username: Joi.string().required().min(6),
        password: Joi.string().required()
    });
    return schema.validate(data);
} 

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;