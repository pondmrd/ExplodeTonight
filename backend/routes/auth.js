const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('../validation');
const { valid } = require('@hapi/joi');
const { maxAgeVal, createToken } = require('../createToken');

router.post('/register', async (req, res) =>{
    //validation schema
    const { error } = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //Check duplicate username and email
    const usernameExist = await User.findOne({ username: req.body.username });
    if(usernameExist) return res.status(400).send('This username already exists');

    const emailExist = await User.findOne({ email: req.body.email });
    if(emailExist) return res.status(400).send('This email already exists');

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //All requirement is passed, so we save the data into database
    const user = new User({
        username: req.body.username,
        Firstname: req.body.Firstname,
        email: req.body.email,
        gender: req.body.gender,
        password: hashedPassword
        //date: Date.now -> MongoDB already handle for us.
    });

    try{
        const savedUser = await user.save();
        res.status(200).send(savedUser);
    }catch(err){
        res.status(400).send(err);
    }
});


router.post('/login', async (req, res) =>{
    //validation schema
    const { error } = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //Check if username exists
    const user = await User.findOne({ username: req.body.username });
    if(!user) return res.status(400).send("This username isn't exist");

    //Check if password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send("Password is wrong");

    //Create and assign a token
    const token = createToken(user._id);

    //Set cookie
    //maxAge in ms
    // res.cookie('auth-token', token, {
    //     httpOnly: true,
    //     maxAge: 1000 * maxAgeVal
    // });

    // res.header('auth-token', token);
    res.header('auth-token', token).send(token);
    
});

module.exports = router;

/*
data example for REGISTERATION
{
    "username": "PondPond",
    "Firstname": "Pndza",
    "email": "Pond1234@gmail.com",
    "gender": "male",
    "password": "PondZa1234"
}

for LOGIN
{
    "username": "PondPond",
    "password": "PondZa1234"
}

HEADER
{
    auth-token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmVmZWY3Y2E2NTk2NTQ1MTBjYTg5ZDkiLCJpYXQiOjE2MDk1NjQ2MTV9.6IHs4gNRD8sed_MXTkuYnSJ1hV_FnwX0MwhtDH2y8Fw
}

*/