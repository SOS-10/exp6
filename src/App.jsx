import React, { useState } from "react";
import "./index.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    skills: [],
    address: "",
    state: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (checked) {
        setFormData({ ...formData, skills: [...formData.skills, value] });
      } else {
        setFormData({
          ...formData,
          skills: formData.skills.filter((skill) => skill !== value)
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
DOB: ${formData.dob}
Gender: ${formData.gender}
Skills: ${formData.skills.join(", ")}
Address: ${formData.address}
State: ${formData.state}
    `);
  };

  const handleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      skills: [],
      address: "",
      state: ""
    });
  };

  return (
    <div className="app">
      <div className="form-box">
        <h2>Registration Form</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>DOB:</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Gender:</label>
            <div>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              /> Male
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
                style={{ marginLeft: "10px" }}
              /> Female
            </div>
          </div>

          <div className="form-group">
            <label>Skills:</label>
            <div>
              <input
                type="checkbox"
                value="HTML"
                onChange={handleChange}
                checked={formData.skills.includes("HTML")}
              /> HTML
              <input
                type="checkbox"
                value="CSS"
                onChange={handleChange}
                checked={formData.skills.includes("CSS")}
                style={{ marginLeft: "10px" }}
              /> CSS
              <input
                type="checkbox"
                value="JavaScript"
                onChange={handleChange}
                checked={formData.skills.includes("JavaScript")}
                style={{ marginLeft: "10px" }}
              /> JavaScript
            </div>
          </div>

          <div className="form-group">
            <label>Address:</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-group">
            <label>State:</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
            >
              <option value="">Select State</option>
              <option value="West Bengal">West Bengal</option>
              <option value="HP">HP</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
            </select>
          </div>

          <div className="button-group">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;