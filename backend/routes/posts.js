const express = require('express');
const router = express.Router();
const verify = require('./verifyToken');
const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send('This is response from post!');
});

router.get('/specific', (req, res) => {
    res.send('This is response from SPECIFIC post!');
});

//################# PRIVATE ROUTE #############################

router.get('/getAllPosts', verify, async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({ messege: err });
    }
})

//################# PRIVATE ROUTE #############################

//Post method (add new user to database)
router.post('/', async (req, res) => {
    const post = new Post({
        username: req.body.username,
        Firstname: req.body.Firstname,
        email: req.body.email,
        gender: req.body.gender,
        password: req.body.password
    })

    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({ messege: err });
    }

});

//get specific post for authentication

module.exports = router;

