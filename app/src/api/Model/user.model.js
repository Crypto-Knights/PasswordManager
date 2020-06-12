const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
        email: {type: String, require: true, trim: true, minlength: 3},
        password: {type: String, require: true, trim: true, minlength: 3},
        firstName: {type: String, require: true, trim: true, minlength: 3},
        lastName: {type: String, require: true, trim: true, minlength: 3},
        questionOne: {type: String},
        answerOne: {type: String, require: true},
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;