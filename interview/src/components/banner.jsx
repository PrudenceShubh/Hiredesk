import React from "react";

const Banner = ({ user }) => {
  let bannertext = "Candidate";
  let buttonforboth = "Post Jobs";
  if (user === "Interviewer") {
    bannertext = "job";
    buttonforboth = "Find Jobs";
  }
  return (
    <div>
      <div className="flex justify-center cursor-pointer  items-center pt-17 gap-4  ">
        <div className="w-[40%]">
          <p className="bg-[#252c3f] border-none rounded-xl text-small font-semibold p-2">
            #1 Ai job platform in India
          </p>
          <h1 className=" text-2xl text-6xl font-semibold pt-2">
            Find Your Perfect {bannertext}{" "}
          </h1>
          <h1 className=" text-2xl  text-6xl font-semibold">
            With{" "} 
            <span className="text-green-700 text-3xl  text-6xl font-semibold">
              Ai Powered
            </span>
          </h1>
          <h1 className=" text-2xl  text-6xl font-semibold">Interview...</h1>
          <p className="w-[70%] text-xl font-light pt-3">
            We use cutting-edge Al technology to streamline the hiring process.
            Job seekers get faster responses, and employers find the perfect
            candidates more efficiently.
          </p>
          <button className="bg-green-700 text-xl cursor-pointer hover:bg-green-600 font-extrabold p-4 rounded mt-2">{buttonforboth}</button>
          <p></p>
        </div>
        <div className="w-[30%] h-65 border-2 border-[#343740] rounded-xl">
          <div className="bg-[#252c3f] rounded-l m-5 h-full">
            <div>
                <div className="text-xl font-semibold pl-2">
              Ai Interview Session{" "}
            </div>
            <div className="p-3">
              <p className="bg-gray-600 p-3">
                <span className="text-l font-bold">Ai intetrviewer : </span> can
                you explain the approach of problem solving
              </p>
              <p className="bg-gray-500 p-3 mt-2">
                <span className="text-l font-bold">Candidate : </span>I
                typically break down the complex problems into smaller one....{" "}
              </p>
            </div>
            <div>
              <div className="ml-5 text-small font-lite flex justify-between items-center ">
                <div>
                    <p>Interview progress</p>
                <p>8 minutes remaning </p>
                </div>
                <div className="bg-red-500 border rounded-xl pl-3 pr-3 pb-1 pt-1 mr-4 border-none hover:bg-red-700 font-bold inline ">End</div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
