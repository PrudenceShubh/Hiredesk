const mongoose= require('mongoose')
const { date, trim } = require('zod')
const feedbackSchema= new mongoose.Schema({
    description:{
        type : String,
        trim:true,
        required:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    post:{
        type:String,
        required:true,
        trim:true
    },
    usertypo:{
        type:String,
        required:true,
        trim:true
    }

})
const feedbackModel = new mongoose.model("Feedback",feedbackSchema)

module.exports= feedbackModel
