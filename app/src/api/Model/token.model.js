const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tokenSchema = new Schema({
        email: {type: String, require: true, trim: true, minlength: 3},
        token: {type: String, require: true}
    },
    {
        timestamps: true
    }
);

const UserToken = mongoose.model('UserToken', tokenSchema);

module.exports = UserToken;