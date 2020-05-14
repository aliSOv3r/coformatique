const mongoose = require('mongoose');
//Schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    fullname: String,
    email: String,
    password: String,
    hasMsg: Boolean

});


//Model
const User = mongoose.model('Users', UserSchema);

module.exports = User;
