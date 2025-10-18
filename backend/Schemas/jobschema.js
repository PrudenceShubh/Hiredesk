const mongoose= require('mongoose')
const { date, trim } = require('zod')
const jobsschemas= new mongoose.Schema({
    jobtitle:{
        type:String,
        required:true,
        trim: true
    },
    companyName:{
        type:String,
        required:true,
        trim: true
    },
    jobdescription:{
        type:String,
        trim: true
    },
    experiance:{
        type:String,
        required:true
    },
    qualification :{
        type :String,
        required: true,
        trim:true
    },
    listingDate:{
        type:Date,
        default :Date.now,
    },
    deadline:{
        type:Date
    },
    location: {
        type: String,
        required: true,
        trim: true
    },

})
const jobsModel = new mongoose.model("Job",jobsschemas)

module.exports= jobsModel