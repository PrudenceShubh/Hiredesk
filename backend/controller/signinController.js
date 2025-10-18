const userModel = require("../Schemas/userSchema")
const bcrypt = require("bcrypt")
const signincontroller = async (req,res)=>{
    const {userName,email,password}= req.body
    if(!userName || !email || !password){
        return res.json({success:false,message:'missing user details'})
    }
    
    // fetching user details
    try{
        const exxistingUser = await userModel.findOne({email})
        if(exxistingUser){
            return res.json({
                success:false,
                Message:"User already exist"
            })
        }
        
        const hashPassword  =await bcrypt.hash(password,10)
        const user = new userModel({userName,email,password:hashPassword})
        await user.save()

        return res.json({success:true,message:"User Signined"})


    }catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}   
module.exports= signincontroller