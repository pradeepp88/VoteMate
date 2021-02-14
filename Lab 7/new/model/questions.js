const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    questionID: Number,
    questionText: String,
    timeStamp: String,
    userName: String    
});


const Question = mongoose.model('Q&A', questionSchema);

module.exports = Question;