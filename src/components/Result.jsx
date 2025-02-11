import React from "react";
import { useLocation, Link } from "react-router-dom";
import companyData from "../utils/company.json";
import { FaGraduationCap, FaCode, FaBriefcase, FaLightbulb, FaBuilding, FaUserGraduate } from "react-icons/fa";

const Result = () => {
  const location = useLocation();
  const { prediction, userData } = location.state || {};

  if (!prediction || !userData) {
    return <div className="text-center text-red-500">Error: No data available</div>;
  }

  const cgpa = parseFloat(userData.cgpa) || 0;
  const dsa_questions = parseInt(userData.dsa_questions) || 0;
  const backlog = parseInt(userData.backlog) || 0;

  const eligibleCompanies = Object.values(companyData.companyList || {}).filter(
    (company) =>
      cgpa >= company.cgpa &&
      backlog <= company.backlog &&
      dsa_questions >= (company.dsa_req === "basic" ? 100 : 500)
  );

  const topCompanies = Object.values(
    eligibleCompanies.reduce((acc, company) => {
      if (!acc[company.name] || company.package > acc[company.name].package) {
        acc[company.name] = company;
      }
      return acc;
    }, {})
  );

  return (
    <div className="max-w-3xl mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6">
        <FaUserGraduate className="inline-block mr-2" /> Placement Prediction Result
      </h1>

      <div className={`text-center text-4xl font-bold mb-8 ${prediction === "YES" ? "text-green-600" : "text-red-600"}`}>
        {prediction}
      </div>

      <h2 className="text-xl font-semibold mb-3">
        <FaBuilding className="inline-block mr-2" /> Eligible Companies
      </h2>

      {topCompanies.length > 0 ? (
        <div className="overflow-x-auto whitespace-nowrap">
          <div className="flex">
            {topCompanies.map((company, index) => (
              <div key={index} className="bg-white p-3 rounded-lg shadow-md flex flex-col items-center mr-3 w-48">
                <img src={company.companyUrl} alt={company.name} className="w-20 h-20 object-contain mb-1" />
                <h3 className="text-sm font-semibold truncate">{company.name}</h3>
                <p className="text-xs text-gray-600">
                  <FaGraduationCap className="inline-block mr-1" /> CGPA: {company.cgpa}
                </p>
                <p className="text-xs text-gray-600">
                  <FaBriefcase className="inline-block mr-1" /> Package: ₹{company.package} LPA
                </p>
                <p className="text-xs text-gray-600">
                  <FaCode className="inline-block mr-1" /> DSA: {company.dsa_req}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-4 text-sm">No eligible companies found. Keep improving your skills!</p>
      )}

      <div className="mt-8 text-center">
        <h3 className="text-xl font-semibold mb-2">
          <FaLightbulb className="inline-block mr-2" /> Recommendations
        </h3>

        {cgpa < 7.5 && (
          <Link to="/academic" className="block bg-yellow-500 text-white py-2 px-4 rounded mt-2">
            Improve Academics
          </Link>
        )}

        {dsa_questions < 100 && (
          <Link to="/dsa/beginner" className="block bg-blue-500 text-white py-2 px-4 rounded mt-2">
            Practice DSA (Beginner)
          </Link>
        )}
        {dsa_questions >= 100 && dsa_questions < 500 && (
          <Link to="/dsa/intermediate" className="block bg-green-500 text-white py-2 px-4 rounded mt-2">
            Practice DSA (Intermediate)
          </Link>
        )}
        {dsa_questions >= 500 && (
          <Link to="/dsa/advanced" className="block bg-purple-500 text-white py-2 px-4 rounded mt-2">
            Practice DSA (Advanced)
          </Link>
        )}

        <Link to="/flow" className="block bg-gray-500 text-white py-2 px-4 rounded mt-4">
          Know More About Campus Hiring
        </Link>
        <Link to="/interview" className="block bg-orange-500 text-white py-2 px-4 rounded mt-2">
          Interview Preparation
        </Link>
      </div>
    </div>
  );
};

export default Result;