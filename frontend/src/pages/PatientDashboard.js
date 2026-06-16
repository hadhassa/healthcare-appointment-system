import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppointmentForm from "../components/AppointmentForm";
import AppointmentList from "../components/AppointmentList";
import { createAppointment, getAppointments } from "../services/api";

function PatientDashboard() {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadAppointments = async () => {
    try {
      setLoading(true);
      const response = await getAppointments();
      setAppointments(response.data);
      setError("");
    } catch (fetchError) {
      setError("Failed to fetch appointments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }

    loadAppointments();
  }, [navigate]);

  const handleBookAppointment = async (payload) => {
    await createAppointment(payload);
    await loadAppointments();
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="app-shell">
      <nav className="top-navbar">
        <h1>Healthcare Appointment System</h1>
        <div className="navbar-links">
          <span className="nav-pill active">Patient</span>
          <Link className="nav-pill" to="/doctor-login">
            Doctor
          </Link>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      <main className="dashboard-stage">
        <div className="dashboard-layout">
        <section className="left-panel">
          <AppointmentForm onBook={handleBookAppointment} />
          {error ? <p className="error-text">{error}</p> : null}
        </section>
        <section className="right-panel">
          {loading ? <p className="loading-text">Loading appointments...</p> : <AppointmentList appointments={appointments} />}
        </section>
        </div>
      </main>
    </div>
  );
}

export default PatientDashboard;