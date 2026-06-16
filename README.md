# 🏥 HealthSync – Healthcare Appointment System

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)

> **Full‑stack appointment management platform** – Patients book appointments, doctors manage requests, with JWT authentication and real‑time status updates.

---

## ✨ Features

- **Patient Dashboard** – Register, login, book appointments (doctor, date, patient details), view all bookings with status (Pending/Approved/Rejected).
- **Doctor Dashboard** – Login by name, see assigned appointments, approve or reject requests instantly.
- **Secure Auth** – JWT‑based authentication, passwords hashed with bcrypt.
- **RESTful API** – Clean endpoints for auth and appointment CRUD.
- **Responsive UI** – Works on all devices with modern glassmorphism design.

---

## 🛠️ Tech Stack

| Layer       | Technology                                      |
|-------------|-------------------------------------------------|
| Frontend    | React 18, React Router 6, Axios, CSS3           |
| Backend     | Node.js, Express, MongoDB (Mongoose), JWT, bcryptjs |
| Database    | MongoDB (local or Atlas)                        |
| Environment | dotenv, Nodemon (dev)                           |

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+), npm/yarn, and MongoDB (local or Atlas).

### Installation

1. **Clone & install backend**
   ```bash
   git clone https://github.com/yourusername/healthsync.git
   cd healthsync/backend
   npm install
Create .env file:

env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/healthsyncDB
JWT_SECRET=your_jwt_secret
Start backend:

bash
npm run dev   # or npm start
Install & run frontend

bash
cd ../frontend
npm install
Create .env file:

env
REACT_APP_API_BASE_URL=http://localhost:5000/api
Start frontend:

bash
npm start
Open http://localhost:3000.

🎯 Usage
Patient: Register → Login → Fill appointment form → View status.

Doctor: Click "Doctor" on login page → Enter name → Approve/Reject appointments.

🔌 API Endpoints
All endpoints under /api.

Method	Endpoint	Description
POST	/auth/register	Register patient
POST	/auth/login	Login → returns JWT token
GET	/appointments	Get all appointments (auth)
POST	/appointments	Create appointment (auth)
PUT	/appointments/:id	Update status (auth)
🤝 Contributing
Fork, create a feature branch, commit changes, and open a pull request.
Ideas: doctor password auth, appointment editing, email notifications, testing.

🙏 Acknowledgments
MongoDB, Express, React, Node communities.

Icons from FontAwesome (used in UI).

Made with ❤️ for healthcare efficiency.

Happy coding! 🚀
