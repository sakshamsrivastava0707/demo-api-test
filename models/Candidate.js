const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type:String, 
        required:true,
    },
    email: { type:String,
        required:true,
        },
    first_round: {
        type: Number,
         min: 0,
        max: 10,
        required:true,
        },
    second_round: {
        type: Number,
         min: 0,
        max: 10,
        required:true,
        },
    third_round:  {
        type: Number,
         min: 0,
        max: 10,
        required:true,
        },
    avg_score:  {
        type: Number,
         min: 0,
        max: 10,
        
        },

})
Candidate = mongoose.model('Candidate', CandidateSchema);
module.exports = Candidate;