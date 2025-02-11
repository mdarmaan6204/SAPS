import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Result from "./components/Result";
import DSA from "./components/DSA"; 
import Beginner from "./components/Beginner";
import Intermediate from "./components/Intermediate";
import Advance from "./components/Advance";
import PlacementFlowchart from "./components/PlacementFlowchart";
import Academic from "./components/Academic";
import Interview from "./components/Interview";

function App() {
  const [userData, setUserData] = useState(null);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form setUserData={setUserData}  />} />
        <Route path="/result" element={<Result userData={userData} />} />
        <Route path="/flow" element={< PlacementFlowchart/>} />
        <Route path="/academic" element={< Academic/>} />
        <Route path="/interview" element={< Interview/>} />


        <Route path="/dsa" element={<DSA />}>
          <Route path="beginner" element={<Beginner />} />
          <Route path="intermediate" element={<Intermediate />} />
          <Route path="advanced" element={<Advance />} />
        </Route>
        <Route path="*" element={<h1>Not Found!</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
