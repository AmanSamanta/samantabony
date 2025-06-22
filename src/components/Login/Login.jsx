import React, { useState } from "react";
import puja from "../../assets/hero/puja.jpg";
import aman2 from "../../assets/hero/aman2.jpg";
import software from "../../assets/hero/software.jpg";
import skill from "../../assets/hero/skill.jpg";
import bb1 from "../../assets/hero/bb1.jpg";
import lady from "../../assets/hero/lady.jpg";

import "./login.css"; // Custom styles (defined below)

const Login = () => {
  const [role, setRole] = useState("student");
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    stream: "",
    teacher: ""
  });

  const subjects = ["Mathematics", "Physics", "Chemistry", "History", "Economics"];
  const streams = ["Science", "Commerce", "Arts"];
  const teachers = ["Mr. Sharma", "Ms. Verma", "Dr. Khan", "Mrs. Das"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Role: ${role}\nName: ${formData.name}\nSubject: ${formData.subject}\nStream: ${formData.stream}\nTeacher: ${formData.teacher}`);
  };

  return (
  <div className ="container " style={{ backgroundImage: `url(${bb1})` }}>
    <div className="login-container">
      <h2>Select Role and Preferences</h2>

      <div className="role-toggle">
        <button className={role === "student" ? "active" : ""} onClick={() => setRole("student")}>Student</button>
        <button className={role === "teacher" ? "active" : ""} onClick={() => setRole("teacher")}>Teacher</button>
      </div>

      <form className="form-box" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          Subject:
          <select name="subject" value={formData.subject} onChange={handleChange} required>
            <option value="">Select Subject</option>
            {subjects.map(sub => <option key={sub} value={sub}>{sub}</option>)}
          </select>
        </label>

        <label>
          Stream:
          <select name="stream" value={formData.stream} onChange={handleChange} required>
            <option value="">Select Stream</option>
            {streams.map(str => <option key={str} value={str}>{str}</option>)}
          </select>
        </label>

        <label>
          Preferred Teacher:
          <select name="teacher" value={formData.teacher} onChange={handleChange} required>
            <option value="">Select Teacher</option>
            {teachers.map(teach => <option key={teach} value={teach}>{teach}</option>)}
          </select>
        </label>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Login;
