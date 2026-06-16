const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    doctor: {
      type: String,
      required: true,
      trim: true
    },
    date: {
      type: String,
      required: true
    },
    patientName: {
      type: String,
      required: true,
      trim: true
    },
    patientAge: {
      type: Number,
      required: true
    },
    patientProblem: {
      type: String,
      required: true,
      trim: true
    },
    status: {
      type: String,
      default: "Pending",
      enum: ["Pending", "Approved", "Rejected"]
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Appointment", appointmentSchema);