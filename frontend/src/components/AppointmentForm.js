import React, { useState } from "react";

function AppointmentForm({ onBook }) {
  const [formData, setFormData] = useState({
    doctor: "",
    date: "",
    patientName: "",
    patientAge: "",
    patientProblem: ""
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!formData.doctor || !formData.date || !formData.patientName || !formData.patientAge || !formData.patientProblem) {
      setError("Please fill all fields");
      return;
    }

    try {
      await onBook({
        ...formData,
        patientAge: Number(formData.patientAge)
      });
      setFormData({
        doctor: "",
        date: "",
        patientName: "",
        patientAge: "",
        patientProblem: ""
      });
    } catch (submitError) {
      setError("Failed to book appointment");
    }
  };

  return (
    <div className="panel-card form-card">
      <h3 className="panel-title">📅 Book Appointment</h3>
      <form onSubmit={handleSubmit} className="form-grid">
        <input
          type="text"
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
          placeholder="Doctor Name"
        />
        <input type="date" name="date" value={formData.date} onChange={handleChange} />
        <input
          type="text"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
          placeholder="Patient Name"
        />
        <input
          type="number"
          name="patientAge"
          value={formData.patientAge}
          onChange={handleChange}
          placeholder="Patient Age"
        />
        <textarea
          name="patientProblem"
          value={formData.patientProblem}
          onChange={handleChange}
          placeholder="Patient Problem"
          rows="3"
        />
        {error ? <p className="error-text">{error}</p> : null}
        <button type="submit" className="primary-btn">
          Book Appointment
        </button>
      </form>
    </div>
  );
}

export default AppointmentForm;