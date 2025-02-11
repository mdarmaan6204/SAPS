import React from "react";
import { FaDatabase, FaCogs, FaCode, FaServer } from "react-icons/fa";

const interviewResources = [
  {
    name: "SQL Interview Questions",
    icon: <FaDatabase className="text-blue-500 text-4xl" />,
    link: "https://www.geeksforgeeks.org/sql-interview-questions/",
  },
  {
    name: "Operating System Interview Questions",
    icon: <FaCogs className="text-green-500 text-4xl" />,
    link: "https://www.interviewbit.com/operating-system-interview-questions/",
  },
  {
    name: "DBMS Interview Questions",
    icon: <FaServer className="text-purple-500 text-4xl" />,
    link: "https://www.interviewbit.com/dbms-interview-questions/",
  },
  {
    name: "OOPS Interview Questions",
    icon: <FaCode className="text-red-500 text-4xl" />,
    link: "https://www.geeksforgeeks.org/oops-interview-questions/",
  },
];

const Interview = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">🎯 Interview Preparation</h1>
        <p className="text-gray-600 mb-6">
          Boost your interview skills with top questions from SQL, OS, DBMS, and OOPS.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {interviewResources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-white/80 p-6 rounded-lg shadow-lg backdrop-blur-md transform transition hover:scale-105 hover:shadow-xl"
            >
              {resource.icon}
              <h3 className="text-lg font-semibold text-gray-700 mt-3">{resource.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interview;
