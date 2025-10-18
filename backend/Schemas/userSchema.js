const mongoose= require("mongoose")
const { email, parseAsync } = require("zod")
const userSchema = new mongoose.Schema({
    userName:{
        type : String,
        required : true,
        trim:true
    },
    email:{
        type : String,
        required : true,
        trim:true
    },
    password:{
        type:String,
        required:true,
    }
})

const userModel = new mongoose.model("User",userSchema)
module.exports= userModel