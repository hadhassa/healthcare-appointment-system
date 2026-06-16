import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const response = await loginUser(formData);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/dashboard");
    } catch (submitError) {
      setError(submitError.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-hero patient-hero">
      <div className="auth-card compact-auth">
        <h2 className="auth-title brand-title">🏥 Pro Health Care</h2>
        <form onSubmit={handleSubmit} className="form-grid">
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
          {error ? <p className="error-text">{error}</p> : null}
          <button type="submit" className="primary-btn">
            Login
          </button>
        </form>
        <p className="auth-link-row centered-link">
          New user? <Link to="/register">Register</Link>
        </p>
        <p className="auth-link-row centered-link">
          Doctor? <Link to="/doctor-login">Doctor Login</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;