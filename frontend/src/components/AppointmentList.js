import React from "react";
import "../AppointmentList.css";

function AppointmentList({ appointments, showActions = false, onStatusChange }) {
  if (!appointments.length) {
    return (
      <div className="panel-card list-card">
        <h3 className="panel-title">👨‍⚕️ Your Appointments</h3>
        <p className="empty-state">No appointments found.</p>
      </div>
    );
  }

  return (
    <div className="panel-card list-card">
      <h3 className="panel-title">👨‍⚕️ Your Appointments</h3>
      <div className="appointment-grid">
        {appointments.map((item) => (
          <article className="appointment-item" key={item._id}>
            <div className="item-top-row">
              <h4 className="item-doctor">Dr. {item.doctor}</h4>
              <span className={`status-badge status-${item.status.toLowerCase()}`}>
                {item.status}
              </span>
            </div>

            <p className="item-meta">📅 Date: {item.date}</p>
            <p className="item-meta">Patient: {item.patientName}</p>
            <p className="item-meta">Age: {item.patientAge}</p>
            <p className="item-meta">💊 Problem: {item.patientProblem}</p>

            {showActions ? (
              <div className="action-row">
                <button className="small-btn approve-btn" onClick={() => onStatusChange(item._id, "Approved")}>
                  Approve
                </button>
                <button className="small-btn reject-btn" onClick={() => onStatusChange(item._id, "Rejected")}>
                  Reject
                </button>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}

export default AppointmentList;