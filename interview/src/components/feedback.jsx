import React, { useEffect, useState } from "react";

const Feedback = () => {
  const [feedbackdata, setFeedbackData] = useState([]);
  const [formdata, setformdata] = useState({
    description: "",
    name: "",
    post: "",
    usertypo: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformdata((prev) => ({ ...prev, [name]: value }));
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/user/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
      });
      const data = await res.json(); // <-- return parsed JSON

      if (data.success) {
        alert("Feedback is submitted");

        // prepend new feedback to list (use returned record if provided)
        setFeedbackData((prev) => [data.data ?? { ...formdata }, ...prev]);

        // reset the form
        setformdata({
          description: "",
          name: "",
          post: "",
          usertypo: "",
        });
      } else {
        alert("Failed: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      console.log("error occured: ", error);
      alert("Network error");
    }
  };

  useEffect(() => {
    fetch("/api/user/fetchfeedback")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setFeedbackData(data.data);
        } else {
          console.log(`Failed to fetch feedback: ${data.message}`);
        }
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="pt-15">
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold">What People are Saying</div>
        <p className="text-2xl pt-2 pb-5 text-center">
          Hear from job seekers and employers who have transformed their hiring
          experience.
        </p>
      </div>

      {/* ✅ Feedback Display Section */}
      <div className="grid grid-cols-2   gap-3 justify-center items-start w-full max-w-340 mx-auto">
        {feedbackdata.length === 0 ? (
          <p>No feedback available. Please provide one.</p>
        ) : (
          feedbackdata.map((feed) => (
            <div
              key={feed._id}
              className="bg-gray-900 flex flex-col pl-4 text-white p-4 h-35 rounded-lg w-[100%]"
            > 
              <p></p>
              <p className="pt-0"><span className="text-xl font-bold">"</span> {feed.description}</p>
              <div className="flex items-center  gap-3 pt-4">
                <p className="text-lg font-semibold">{feed.name}</p>
              <p className="text-sm text-gray-400">
                {feed.post} — {feed.usertypo}
              </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* ✅ Feedback Form Section */}
      <div className="pt-20">
        <div className="w-full">
          <div className="flex items-center  justify-center text-4xl font-bold">
            <p>Provide Your Valuble Feedbake </p>
          </div>

          <form onSubmit={handlesubmit}>
            <div className="flex flex-col items-center justify-center mt-10">
              <div className="flex flex-col bg-gray-900 w-[40%] border-none rounded-xl p-6 text-white">
                <textarea
                  className="h-[100px] p-3 bg-gray-800 resize-none rounded-md"
                  placeholder="Enter Your Feedback"
                  name="description"
                  value={formdata.description}
                  onChange={handlechange}
                ></textarea>

                <div className="flex gap-5 pt-4">
                  <input
                    className="bg-gray-600 rounded p-2 w-full"
                    type="text"
                    placeholder="Enter your Name"
                    value={formdata.name}
                    name="name"
                    onChange={handlechange}
                    required
                  />
                  <input
                    className="bg-gray-600 rounded p-2 w-full"
                    type="text"
                    value={formdata.post}
                    name="post"
                    onChange={handlechange}
                    placeholder="Enter your Post"
                    required
                  />
                </div>

                <div className="flex justify-between pt-3">
                  <div className="flex items-center  gap-3">
                    <div className="flex gap-2 p-2 rounded-xl bg-gray-700">
                      <p>Employee</p>
                      <input
                        type="radio"
                        name="usertypo"
                        onChange={handlechange}
                        checked={formdata.usertypo === "Employee"}
                        value="Employee"
                      />
                    </div>
                    <div className="flex gap-2 p-2 rounded-xl bg-gray-700">
                      <p>Job Seeker</p>
                      <input
                        type="radio"
                        name="usertypo"
                        onChange={handlechange}
                        checked={formdata.usertypo === "Job Seeker"}
                        value="Job Seeker"
                      />
                    </div>
                  </div>
                  <div>
                    <button type="submit" className="bg-gray-500 p-2 text-l font-bold rounded-xl pt-2">
                      SUBMIt
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
