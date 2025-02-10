import React from "react";
import { FaBook, FaCode, FaDatabase, FaLaptopCode, FaNetworkWired } from "react-icons/fa";

const academicResources = [
  {
    name: "Aptitude",
    icon: <FaBook className="text-blue-500 text-3xl" />,
    link: "https://www.indiabix.com/",
  },
  {
    name: "DBMS",
    icon: <FaDatabase className="text-green-500 text-3xl" />,
    link: "https://drive.google.com/drive/folders/0B5VNjNWvWp7Gfl9xM0lmbXFjWjRla1ZyemlNc2Y3SFVvZnlZaWUwZE8weWFtSVhHV0dDRXM?resourcekey=0-Y5BTmQwVQccMozfZmmePIw",
  },
  {
    name: "Operating System",
    icon: <FaLaptopCode className="text-purple-500 text-3xl" />,
    link: "https://drive.google.com/file/d/1YQgAEuZz0feOCyll1GFZdg0H-hcPC2yP/view?usp=drivesdk",
  },
  {
    name: "Data Structures & Algorithms",
    icon: <FaCode className="text-red-500 text-3xl" />,
    link: "https://drive.google.com/drive/folders/0B5VNjNWvWp7GfjNycUdOVko1Uk4yNk01Z042dXR6WW9GV0tfX1FITzAwcl94amQyUENjMmc?resourcekey=0-tlbYMKitbfSVnNoHyq3lNA",
  },
  {
    name: "Computer Networks",
    icon: <FaNetworkWired className="text-yellow-500 text-3xl" />,
    link: "https://drive.google.com/drive/folders/0B5VNjNWvWp7GfjU5QkVZR3hqWGRKbTJDZHhMMFUyazhCQ1FmMjNqckx1Uk8tbWcyMDFHNDg?resourcekey=0-8HcWAEjnkUhXIZV0SyPb9w",
  },
];

const Academic = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">📖 Academic Resources</h1>
        <p className="text-gray-600 mb-6">Explore high-quality resources for your academic and competitive exams.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {academicResources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-gray-200 p-6 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl"
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

export default Academic;
