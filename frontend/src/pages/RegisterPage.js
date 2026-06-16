import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";

function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await registerUser(formData);
      setMessage(response.data.message || "Registration successful");
      setTimeout(() => navigate("/"), 1000);
    } catch (submitError) {
      setError(submitError.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="page-center">
      <div className="auth-card">
        <h2 className="auth-title">Patient Register</h2>
        <form onSubmit={handleSubmit} className="form-grid">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
          {message ? <p className="success-text">{message}</p> : null}
          {error ? <p className="error-text">{error}</p> : null}
          <button type="submit" className="primary-btn">
            Register
          </button>
        </form>
        <p className="auth-link-row">
          Already registered? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;