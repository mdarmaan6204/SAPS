import { useLocation, Link } from "react-router-dom";
import React from "react";

function ResultPage() {
  const location = useLocation();
  const { result, suggestions } = location.state || { result: "No Data", suggestions: [] };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-3xl font-semibold mb-4 text-center text-blue-600">Prediction Result</h2>
        <p className="text-xl font-bold text-center mb-4">Placement: <span className="text-green-500">{result}</span></p>
        <div className="mt-5">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Suggestions:</h3>
          <ul className="list-disc list-inside bg-gray-50 p-4 rounded-lg">
            {suggestions.length > 0 ? (
              suggestions.map((suggestion, index) => <li key={index} className="mb-1 text-gray-600">{suggestion}</li>)
            ) : (
              <p className="text-gray-500">No suggestions available</p>
            )}
          </ul>
        </div>
        <Link to="/" className="mt-5 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 block text-center">
          Try Again
        </Link>
      </div>
    </div>
  );
}

export default ResultPage;