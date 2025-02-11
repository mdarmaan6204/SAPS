import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = ({ setUserData }) => {
  const [formData, setFormData] = useState({
    cgpa: "8.2",
    dsa_questions: "500",
    knows_sql: "Yes",
    skills: "Web",
    skill_level: "Advanced",
    projects: "4",
    internships: "0",
    backlog: "No",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", formData);
      const prediction = response.data.prediction;

      setUserData(formData);

      navigate("/result", { state: { prediction, userData: formData } });
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Placement Prediction Form</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">CGPA:</label>
            <input
              type="number"
              name="cgpa"
              value={formData.cgpa}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter CGPA"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">DSA Questions Solved:</label>
            <input
              type="number"
              name="dsa_questions"
              value={formData.dsa_questions}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Number of DSA questions"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Do you know SQL?</label>
            <select
              name="knows_sql"
              value={formData.knows_sql}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Primary Skill:</label>
            <select
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="Web">Web Development</option>
              <option value="Data Science">Data Science</option>
              <option value="Mobile">Mobile Development</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Skill Level:</label>
            <select
              name="skill_level"
              value={formData.skill_level}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Number of Projects:</label>
            <input
              type="number"
              name="projects"
              value={formData.projects}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter number of projects"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Number of Internships:</label>
            <input
              type="number"
              name="internships"
              value={formData.internships}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter number of internships"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Do you have a backlog?</label>
            <select
              name="backlog"
              value={formData.backlog}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          >
            Predict Placement
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
