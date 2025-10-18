
const jobsModel = require("../Schemas/jobschema");

const jobcontroller= async (req, res)=>{
    const {jobtitle,companyName,jobdescription,experiance,qualification,listingDate,deadline,location}= req.body;
    if(!jobtitle || !companyName || !jobdescription || !experiance || !qualification || !deadline ||  !location){
        return res.status(400).json({
            success:false,
            message:"some fields are missing.."
        })
    }
    try{
        const jobpost = new jobsModel({jobtitle,companyName,jobdescription,experiance,qualification,listingDate: listingDate || Date.now(),deadline,location})
        await jobpost.save()
        return res.status(201).json({
      success: true,
      message: "Job posted successfully",
      job: jobpost,
    });
    }catch(error){
        res.json({
            success:false,
            message:"something went wrong",
            errorMessage:error.message || error
        })
    }
}
module.exports= jobcontroller