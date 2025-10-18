import React from "react";
import { FiMessageSquare } from "react-icons/fi";
import { FaUsers } from "react-icons/fa6";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { SlScreenDesktop } from "react-icons/sl";
import { IoTimerOutline } from "react-icons/io5";
import { VscFeedback } from "react-icons/vsc";

const Features = () => {
  const featuresdata = [
    {
      logo: <FiMessageSquare />,
      text: "Ai Driven Interviews",
      para: "Our Ai conduct initial screening interviews, eveluating technical skills to identify top candidates.",
    },
    {
      logo: <FaUsers />,
      text: "Smart Candidate Matching",
      para: "Our plateform automatically matches candidates  with job postings based on sikks,experiance and cultural fit. ",
    },
    {
      logo: <HiOutlineDocumentReport />,
      text: "Comprehensive Reports",
      para: "Get detailed assesment reports highliting candidate strengts areas for growth and fit for specific roles. ",
    },
    {
      logo: <SlScreenDesktop />,
      text: "Screen Recording ",
      para: "Capture screen recording during technical assesments to eveluate problem solving approaches and problem solving skills.",
    },
    {
      logo: <IoTimerOutline />,
      text: "Time-Saving ",
      para: "Reduce hiring time by 70% with automated first round interview that can be condected 23/7 without scheduling husstles.",
    },
    {
      logo: <VscFeedback />,
      text: "Feedback For All",
      para: "Provide constructive feedback to all candidate not just those who advance,improving the averall candidate experiance.",
    },
  ];

  return (
    <div className="flex flex-col gap-6 items-center  pt-50 justify-center ">
      <div>
        <div className="text-center text-5xl font-semibold ">Powerful Features</div>
        <p className="text-l p-5">
          Or plateform offers innovative sollutions to common hiring challanges
          , savig time and resources while improving outcomes{" "}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3 items-center justify-center ">
        {featuresdata.map((data, index) => {
          return (
            <div className="bg-gray-900 rounded p-3 hover:bg-gray-800  w-130" key={index}>
              <div className="text-5xl pb-3 text-green-500  font-bold">{data.logo}</div>
              <div className="text-xl pb-1 font-semibold">{data.text}</div>
              <div className="text-l">{data.para}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
