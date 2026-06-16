import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function DoctorLoginPage() {
  const navigate = useNavigate();
  const [doctorName, setDoctorName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (!doctorName.trim()) {
      setError("Doctor name is required");
      return;
    }

    localStorage.setItem("doctorName", doctorName.trim());
    navigate("/doctor-dashboard");
  };

  return (
    <div className="app-shell">
      <nav className="top-navbar">
        <h1>Healthcare Appointment System</h1>
        <div className="navbar-links">
          <Link className="nav-pill" to="/">
            Patient
          </Link>
          <span className="nav-pill active">Doctor</span>
          <button className="logout-btn" onClick={() => navigate("/")}>
            Logout
          </button>
        </div>
      </nav>

      <div className="auth-hero doctor-hero">
        <div className="auth-card compact-auth doctor-login-card">
          <h2 className="auth-title">👨‍⚕️ Doctor Login</h2>
          <form onSubmit={handleSubmit} className="form-grid">
            <input
              type="text"
              value={doctorName}
              onChange={(event) => setDoctorName(event.target.value)}
              placeholder="Enter Doctor Name"
            />
            {error ? <p className="error-text">{error}</p> : null}
            <button type="submit" className="primary-btn">
              Login
            </button>
          </form>
          <p className="auth-link-row centered-link">
            Back to <Link to="/">Patient Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DoctorLoginPage;