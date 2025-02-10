import React from "react";

const Result = ({ result, suggestions }) => {
  return (
    <div className="mt-6 p-4 bg-gray-50 border rounded shadow">
      <h3 className="text-xl font-bold text-center">
        Placement Prediction:{" "}
        <span className={result === "Yes" ? "text-green-600" : "text-red-600"}>
          {result}
        </span>
      </h3>

      {suggestions.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold">Suggestions for Improvement:</h4>
          <ul className="list-disc list-inside text-gray-700">
            {suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Result;
