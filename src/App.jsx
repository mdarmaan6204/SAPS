import React, { useState } from "react";
import Form from "./components/Form";
import Result from "./components/Result";

const App = () => {
  const [result, setResult] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">
          Student Performance Analyzer
        </h2>

        {/* Form Component */}
        <Form setResult={setResult} setSuggestions={setSuggestions} />

        {/* Result Component */}
        {result && <Result result={result} suggestions={suggestions} />}
      </div>
    </div>
  );
};

export default App;
