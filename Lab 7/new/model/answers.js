const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
    answerID: Number,
    answerText: String,
    questionID: Number,
    userName: String,
    upVoteCount: Number,
    downVoteCount: Number    
});


const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;