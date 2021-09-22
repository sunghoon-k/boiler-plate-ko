const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, /* delete spacebar space ex) Sung Hoon => SungHoon */
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: { /* normal user or manager */
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: { /* token expiration */
        type: Number
    }
})

const User = mongoose.model('User', userSchema) /* covering schema with model */

module.exports = { User } /* other files can use this module */