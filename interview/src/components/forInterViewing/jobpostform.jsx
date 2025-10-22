import React, { useState } from "react";
import Schedulingimg from "../../assets/Group1.svg";

const Jobpostform = () => {
  const [jobdata, setjobdata] = useState([])
  const [formdata, setformdata] = useState({
    jobtitle: "",
    companyName: "",
    jobdescription: "",
    experiance: "",
    qualification: "",
    listingDate: "",
    deadline: "",
    location: ""
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformdata((prev) => ({ ...prev, [name]: value }))
  }

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/interviewer/jobpost', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata)
      })
      const data = await res.json();
      if (data.success) {
        alert("new job posted");

        setjobdata((prev) => [data.job ?? { ...formdata }, ...prev])
        setformdata({
          jobtitle: "",
          companyName: "",
          jobdescription: "",
          experiance: "",
          qualification: "",
          listingDate: "",
          deadline: "",
          location: ""
        })
      } else {
        alert("failed: " + (data.message || "unknown error"))
      }
    } catch (error) {
      console.log(error);
      alert("network error")
    }
  }

  return (
    <div className="w-full ">
      <div className=" bg-green-950 pb-15 flex item-center justify-center pt-17 ">
        <div className="flex gap-10">
          <form onSubmit={handlesubmit}>
            <div className="flex flex-col pt-27  gap-5  ">
              <div className="flex gap-4   ">
                <input
                  type="text"
                  name="jobtitle"
                  value={formdata.jobtitle}
                  onChange={handlechange}
                  className=" p-1 border rounded-[5px] w-60  text-xl font-bold"
                  placeholder="Enter Job title"
                />
                <input
                  type="text"
                  name="companyName"
                  value={formdata.companyName}
                  onChange={handlechange}
                  className="  p-1 border rounded-[5px] w-60 text-xl font-bold"
                  placeholder="Enter company name"
                />
                <input
                  type="text"
                  name="experiance"
                  value={formdata.experiance}
                  onChange={handlechange}
                  className="  p-1 border rounded-[5px] w-60 text-xl font-bold"
                  placeholder="Enter candidate experience"
                />
              </div>
              <div>
                <input
                  className=" p-1 border rounded-[5px]  text-xl font-bold w-80 overflow-hidden"
                  type="text"
                  name="qualification"
                  value={formdata.qualification}
                  onChange={handlechange}
                  placeholder="Enter candidate qualification"
                />
              </div>
              <div>
                <textarea
                  className="text-l font-semibold w-204 border-1 p-4 rounded-xl "
                  name="jobdescription"
                  value={formdata.jobdescription}
                  onChange={handlechange}
                  placeholder="Provide job description"
                ></textarea>
              </div>
              <div className="flex gap-4">
                <input
                  type="date"
                  name="deadline"
                  value={formdata.deadline}
                  onChange={handlechange}
                  className=" p-1 border rounded-[5px]  text-xl font-bold w-60 overflow-hidden"
                  placeholder="last date to apply"
                />
                <input
                  type="text"
                  name="location"
                  value={formdata.location}
                  onChange={handlechange}
                  className=" p-1 border rounded-[5px]  text-xl font-bold w-60 overflow-hidden"
                  placeholder="location "
                />

                <button type="submit" className=" text-black p-2 rounded-xl pl-3 pr-3 font-bold  text-l bg-green-500">POST JOB</button>
              </div>
            </div>
          </form>
          <div>
            <div>
              <img className=" h-120" src={Schedulingimg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobpostform;
