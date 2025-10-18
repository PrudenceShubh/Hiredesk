const bcrypt = require("bcrypt")
const userModel = require("../Schemas/userSchema")
const loginController = async(req,res)=>{
    const {email , password}= req.body
    if(!email || !password){
        return res.json({
            success:false,
            meassage:"Incomplete fields"
        })
    }
    try{

        const user =await userModel.findOne({email})
        if(!user){
            res.send("Invalid username and password")
        }
        const isvalid = await bcrypt.compare(password,user.password)
        if(!isvalid){
            return res.json({
                success:false,
                message:"Invalid password"
            })
        }
        return res.json({
            success:true,
            message:"User loggedin"
        })
    }catch(error){
        res.json({success:false,message:error.message})

    }

}
module.exports= loginController