const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const authRoutes = require("./routes/auth");
const appointmentRoutes = require("./routes/appointments");

const app = express();

app.use(cors());
app.use(express.json());

const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/healthsyncDB";

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected successfully");
});

mongoose.connection.on("error", (error) => {
  console.error("MongoDB connection error:", error.message);
});

mongoose
  .connect(mongoUri)
  .catch((error) => {
    console.error("MongoDB initial connection error:", error.message);
  });

app.get("/", (req, res) => {
  res.send("HealthSync API is running");
});

app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});