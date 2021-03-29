const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 6
    },
    Firstname: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        default: 'NULL'
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);

//username firstname email gender pw date

//username & email should be unique, so we have to be careful in register session.
//hash password