const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
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
        required: true
    }
});

module.exports = mongoose.model('Posts', PostSchema);
