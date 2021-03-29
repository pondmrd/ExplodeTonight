const express = require('express');
const router = express.Router();
const verify = require('./verifyToken');

router.get('/privateData', verify, async (req, res) =>{
    res.status(200).send("Private Message: LAB Network เยอะมาก!")
});

module.exports = router;