const { success } = require("zod")
const feedbackModel = require("../Schemas/feedbackSchema")


const feedbackcontrole  = async( req,res)=>{
    const {description , name , post, usertypo } = req.body
    if(!description || !name || !post|| !usertypo){
        return res.json({
            success:false,
            message:"Some Fields are missing"
        })
    }
    try{
        const feedback = new feedbackModel({description , name , post, usertypo})
        await feedback.save()
        return res.status(201).json({
            success: true,
            message: "feedback posted successfully",
            data:feedback
        });
    }catch(error){
        return res.json({
            message:error.message,
            
        })
    }
    
}

const feedbackFatcher  = async(req,res)=>{
    try {
        const feeddata =await feedbackModel.find()
        if(!feeddata){
            res.json({
                success:false,
                message:"No feedback available to show"
            })
        }
        res.json({
            success:true,
            data:feeddata
        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
}
module.exports= {
    feedbackcontrole,
    feedbackFatcher

}
