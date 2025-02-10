import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Result from "./components/Result";
import DSA from "./components/DSA"; 
import Beginner from "./components/Beginner";
import Intermediate from "./components/Intermediate";
import Advance from "./components/Advance";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/result" element={<Result />} />

        {/* Parent Route for DSA */}
        <Route path="/dsa" element={<DSA />}>
          <Route path="beginner" element={<Beginner />} />
          <Route path="intermediate" element={<Intermediate />} />
          <Route path="advance" element={<Advance />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
