import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function FormPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    sgpa: "",
    dsa_questions: "",
    knows_sql: "No",
    skills: "Web",
    skill_level: "Beginner",
    projects: "",
    internships: "",
    backlog: "No",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", formData, {
        headers: { "Content-Type": "application/json" },
      });
      navigate("/result", { state: { result: response.data.prediction, suggestions: response.data.suggestions } });
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-semibold mb-5">Enter Student Details</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-md w-96">
        <input type="number" name="sgpa" placeholder="SGPA" value={formData.sgpa} onChange={handleChange} required className="w-full p-2 border rounded mb-3" />
        <input type="number" name="dsa_questions" placeholder="DSA Questions Solved" value={formData.dsa_questions} onChange={handleChange} required className="w-full p-2 border rounded mb-3" />
        <select name="knows_sql" value={formData.knows_sql} onChange={handleChange} className="w-full p-2 border rounded mb-3">
          <option value="Yes">Knows SQL</option>
          <option value="No">Does not know SQL</option>
        </select>
        <select name="skills" value={formData.skills} onChange={handleChange} className="w-full p-2 border rounded mb-3">
          <option value="Web">Web</option>
          <option value="Data Science">Data Science</option>
          <option value="Mobile">Mobile</option>
        </select>
        <select name="skill_level" value={formData.skill_level} onChange={handleChange} className="w-full p-2 border rounded mb-3">
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
        <input type="number" name="projects" placeholder="Number of Projects" value={formData.projects} onChange={handleChange} required className="w-full p-2 border rounded mb-3" />
        <input type="number" name="internships" placeholder="Number of Internships" value={formData.internships} onChange={handleChange} required className="w-full p-2 border rounded mb-3" />
        <select name="backlog" value={formData.backlog} onChange={handleChange} className="w-full p-2 border rounded mb-3">
          <option value="Yes">Has Backlog</option>
          <option value="No">No Backlog</option>
        </select>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Predict</button>
      </form>
    </div>
  );
}

export default FormPage;
