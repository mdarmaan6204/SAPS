import React from "react";
import { useLocation, Link } from "react-router-dom";
import companyData from "../utils/company.json";

const Result = () => {
  const location = useLocation();
  const { prediction, userData } = location.state || {};

  if (!prediction || !userData) {
    return <div className="text-center text-red-500">Error: No data available</div>;
  }

  const eligibleCompanies = Object.values(companyData.companyList || {}).filter(
    (company) =>
      userData.cgpa >= company.cgpa &&
      userData.backlog <= company.backlog &&
      userData.dsa_questions >= (company.dsa_req === "basic" ? 100 : 500)
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Placement Prediction Result</h1>

      <div className={`text-center text-4xl font-bold mb-8 ${prediction === "YES" ? "text-green-600" : "text-red-600"}`}>
        {prediction}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Eligible Companies</h2>

      {eligibleCompanies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {eligibleCompanies.map((company, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <img src={company.companyUrl} alt={company.name} className="w-24 h-24 object-contain mb-2" />
              <h3 className="text-lg font-semibold">{company.name}</h3>
              <p className="text-sm text-gray-600">CGPA: {company.cgpa}</p>
              <p className="text-sm text-gray-600">Package: ₹{company.package} LPA</p>
              <p className="text-sm text-gray-600">DSA Level: {company.dsa_req}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-4">No eligible companies found. Keep improving your skills!</p>
      )}

      <div className="mt-8 text-center">
        <h3 className="text-xl font-semibold mb-2">Recommendations</h3>
        {userData.dsa_questions < 100 && (
          <Link to="/dsa/beginner" className="block bg-blue-500 text-white py-2 px-4 rounded mt-2">
            Start DSA (Beginner)
          </Link>
        )}
        {userData.dsa_questions >= 100 && userData.dsa_questions < 500 && (
          <Link to="/dsa/intermediate" className="block bg-green-500 text-white py-2 px-4 rounded mt-2">
            Improve DSA (Intermediate)
          </Link>
        )}
        {userData.dsa_questions >= 500 && (
          <Link to="/dsa/advanced" className="block bg-purple-500 text-white py-2 px-4 rounded mt-2">
            Master DSA (Advanced)
          </Link>
        )}
      </div>
    </div>
  );
};

export default Result;
