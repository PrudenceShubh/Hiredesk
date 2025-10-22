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
        return res.status(500).json({
            success:false,
            message:"something went wrong",
            errorMessage:error.message || error
        })
    }
}

const jobfetcher = async (req, res) => {
    try {
        const jobdata = await jobsModel.find();

        if (!jobdata || jobdata.length === 0) {
            return res.json({
                success: false,
                message: "No data available to show"
            });
        }

        return res.json({
            success: true,
            data: jobdata
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const jobdelete = async(req, res) => {
    try {
        const { id } = req.params;
        
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Job ID is required"
            });
        }

        const deletedJob = await jobsModel.findByIdAndDelete(id);
        
        if (!deletedJob) {
            return res.status(404).json({
                success: false,
                message: "Job post not found"
            });
        }

        return res.json({
            success: true,
            message: "Job deleted successfully",
            data: deletedJob
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}




module.exports={
    jobcontroller,
    jobfetcher,
    jobdelete
}
