const express = require("express");
const Appointment = require("../models/Appointment");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.json(appointments);
  } catch (error) {
    console.error("Fetch appointments error:", error.message);
    res.status(500).json({ message: "Server error fetching appointments" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { doctor, date, patientName, patientAge, patientProblem } = req.body;

    if (!doctor || !date || !patientName || !patientAge || !patientProblem) {
      return res.status(400).json({ message: "All appointment fields are required" });
    }

    const appointment = await Appointment.create({
      doctor,
      date,
      patientName,
      patientAge,
      patientProblem
    });

    res.status(201).json(appointment);
  } catch (error) {
    console.error("Create appointment error:", error.message);
    res.status(500).json({ message: "Server error creating appointment" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { status } = req.body;

    if (!status || !["Approved", "Rejected", "Pending"].includes(status)) {
      return res.status(400).json({ message: "Valid status is required" });
    }

    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.json(appointment);
  } catch (error) {
    console.error("Update appointment error:", error.message);
    res.status(500).json({ message: "Server error updating appointment" });
  }
});

module.exports = router;