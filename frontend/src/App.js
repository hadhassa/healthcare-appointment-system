import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorLoginPage from "./pages/DoctorLoginPage";
import DoctorDashboard from "./pages/DoctorDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<PatientDashboard />} />
      <Route path="/doctor-login" element={<DoctorLoginPage />} />
      <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
    </Routes>
  );
}

export default App;