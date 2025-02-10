import { useLocation, Link } from "react-router-dom";
import React from "react";

function ResultPage() {
  const location = useLocation();
  const { result, suggestions } = location.state || { result: "No Data", suggestions: [] };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-3xl font-semibold mb-4">Prediction Result</h2>
      <p className="text-xl font-bold">Placement: {result}</p>
      <div className="mt-5">
        <h3 className="text-lg font-semibold">Suggestions:</h3>
        <ul className="list-disc list-inside">
          {suggestions.length > 0 ? (
            suggestions.map((suggestion, index) => <li key={index}>{suggestion}</li>)
          ) : (
            <p>No suggestions available</p>
          )}
        </ul>
      </div>
      <Link to="/" className="mt-5 px-4 py-2 bg-green-500 text-white rounded-lg">
        Try Again
      </Link>
    </div>
  );
}

export default ResultPage;