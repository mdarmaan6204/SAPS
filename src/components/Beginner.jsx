import { useState, useEffect } from "react";
import React from "react";
import dsaQuestions from '../utils/dsa.json';
import { GFG_LOGO } from "../utils/constant";
import { DOC_LOGO } from "../utils/constant";
import { YT_LOGO } from "../utils/constant";

const Beginner = () => {
  const [openDay, setOpenDay] = useState(null);
const data = dsaQuestions.dsaForBeginner;
  

  const toggleAccordion = (day) => {
    setOpenDay(openDay === day ? null : day);
  };

  return (
    <div className="bg-gray-100 p-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {data &&
          Object.entries(data).map(([category, problems], index) => (
            <AccordionItem
              key={index}
              title={category.charAt(0).toUpperCase() + category.slice(1)}
              count={`${problems.length} problems`}
              isOpen={openDay === category}
              toggle={() => toggleAccordion(category)}
            >
              <ProblemTable problems={problems} />
            </AccordionItem>
          ))}
      </div>
    </div>
  );
};

const AccordionItem = ({ title, count, isOpen, toggle, children }) => {
  return (
    <div className="bg-white shadow-md rounded-lg mb-4">
      <div
        className="flex justify-between items-center p-4 border-b border-gray-200 cursor-pointer"
        onClick={toggle}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="flex items-center">
          <span className="text-gray-500 mr-2">{count}</span>
          <button className="text-gray-500">
            <i className={`fas ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
          </button>
        </div>
      </div>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

const ProblemTable = ({ problems }) => {
  return (
    <table className="w-full text-left">
      <thead>
        <tr className="text-gray-500">
          <th className="py-2">PROBLEM</th>
          <th className="py-2">PRACTICE</th>
          <th className="py-2">SOLUTION LINK</th>
          <th className="py-2">YOUTUBE LINK</th>
          <th className="py-2">LEVEL</th>
        </tr>
      </thead>
      <tbody>
        {problems.map((problem, index) => (
          <tr key={index} className="border-t">
            <td className="py-2">
              <a href={problem.questionLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                {problem.questionTitle}
              </a>
            </td>
            <td className="py-2">
              <a href={problem.practiceLink} target="_blank" rel="noopener noreferrer">
                <img src={GFG_LOGO} alt="GFG" className="w-6 h-6  mx-auto" />
              </a>
            </td>
            <td className="py-2">
              <a href={problem.solutionLink} target="_blank" rel="noopener noreferrer">
                <img src={DOC_LOGO} alt="DOC" className="w-6 h-6  mx-auto" />
              </a>
            </td>
            <td className="py-2 ">
              <a href={problem.solutionVideo} target="_blank" rel="noopener noreferrer">
              <img src={YT_LOGO} alt="YT" className="w-10 h-6  mx-auto" />
              </a>
            </td>
            <td className="py-2">
              <span className={`bg-green-100 text-green-600 py-1 px-2 rounded-full`}>{problem.questionLevel}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Beginner;
