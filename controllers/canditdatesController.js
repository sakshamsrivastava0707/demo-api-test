const mongoose = require('mongoose');
const Candidate = require('../models/Candidate');

module.exports.showTopCanditate = async (req,res)=>{
    try{
        const candidate = await Candidate.find({}).sort({avg_score: 'desc'});
        console.log(candidate);
        return res.status(200).json(
             {
                topCandidate: candidate[0],// the top performer is at the starting of the array 
                                            // after the sorting
            }
            );

    }catch(err){
        console.log(err);
        return  res.status(500).json(
            {msg:"Error occured"}
            );
    }

};
module.exports.showListOfCanditates= async (req,res)=>{
    try{

        const candidate = await Candidate.find({}).sort({avg_score: 'desc'});
        console.log(candidate);
        return res.status(200).json(
             {
                candidate: candidate,
            }
            );
    }catch(err){
        console.log(err);
        return  res.status(500).json(
            {msg:"Error occured"}
            );
    }

};

module.exports.postCandidateDetails=async (req, res) => {
       
    try{

       const first_score =parseInt(req.body.first_round);
       const second_score =parseInt(req.body.second_round);
       const third_score =parseInt(req.body.third_round);
        const candidate =  await new Candidate({
        _id : new mongoose.Types.ObjectId,
        name :req.body.name,
        email :req.body.email,
        first_round :req.body.first_round,
        second_round :req.body.second_round,
        third_round :req.body.third_round,
        avg_score :(first_score + second_score+ third_score)/3,
        });
        candidate.save();
        console.log(candidate);
       return res.status(200).json(
           {msg:"succesfully submitted"}
           );
    }catch(err){
        console.log(err);
        return  res.status(500).json(
            {msg:"Error occured"}
            );
    }


};