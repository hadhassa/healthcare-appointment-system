import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AppointmentList from "../components/AppointmentList";
import { getAppointments, updateAppointmentStatus } from "../services/api";

function DoctorDashboard() {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const doctorName = localStorage.getItem("doctorName") || "";

  const fetchAppointments = async () => {
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
    if (!doctorName) {
      navigate("/doctor-login");
      return;
    }

    fetchAppointments();
  }, [doctorName, navigate]);

  const doctorAppointments = useMemo(() => {
    return appointments.filter(
      (item) => item.doctor.toLowerCase() === doctorName.toLowerCase()
    );
  }, [appointments, doctorName]);

  const handleStatusChange = async (id, status) => {
    try {
      await updateAppointmentStatus(id, status);
      await fetchAppointments();
    } catch (updateError) {
      setError("Failed to update status");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("doctorName");
    navigate("/doctor-login");
  };

  return (
    <div className="app-shell">
      <nav className="top-navbar">
        <h1>Healthcare Appointment System</h1>
        <div className="navbar-links">
          <Link className="nav-pill" to="/dashboard">
            Patient
          </Link>
          <span className="nav-pill active">Doctor</span>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      <main className="doctor-stage">
        <div className="single-panel-layout">
          <div className="doctor-heading">👨‍⚕️ Dr. {doctorName} Dashboard</div>

          {error ? <p className="error-text">{error}</p> : null}
          {loading ? (
            <p className="loading-text">Loading appointments...</p>
          ) : (
            <AppointmentList
              appointments={doctorAppointments}
              showActions
              onStatusChange={handleStatusChange}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default DoctorDashboard;