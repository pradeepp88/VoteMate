const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userID: String,
    password: String,
    questionID: Number,
    rewardPoints: Number    
});


const User = mongoose.model('User', userSchema);

module.exports = User;