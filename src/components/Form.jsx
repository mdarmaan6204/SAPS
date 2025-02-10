import React, { useState } from "react";
import axios from "axios";

const Form = ({ setResult, setSuggestions }) => {
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

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", formData, {
        headers: { "Content-Type": "application/json" },  // Ensure JSON format
      });
  
      setResult(response.data.prediction);
      setSuggestions(response.data.suggestions);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-medium">SGPA:</label>
        <input
          type="number"
          name="sgpa"
          value={formData.sgpa}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block font-medium">DSA Questions Solved:</label>
        <input
          type="number"
          name="dsa_questions"
          value={formData.dsa_questions}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block font-medium">Knows SQL?</label>
        <select
          name="knows_sql"
          value={formData.knows_sql}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div>
        <label className="block font-medium">Skills:</label>
        <select
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="Web">Web</option>
          <option value="Data Science">Data Science</option>
          <option value="Mobile">Mobile</option>
        </select>
      </div>

      <div>
        <label className="block font-medium">Skill Level:</label>
        <select
          name="skill_level"
          value={formData.skill_level}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      <div>
        <label className="block font-medium">Projects:</label>
        <input
          type="number"
          name="projects"
          value={formData.projects}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block font-medium">Internships:</label>
        <input
          type="number"
          name="internships"
          value={formData.internships}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block font-medium">Backlog?</label>
        <select
          name="backlog"
          value={formData.backlog}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Predict Placement
      </button>
    </form>
  );
};

export default Form;
