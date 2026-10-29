𝐃𝐨𝐜𝐭𝐨𝐫 𝐀𝐩𝐩𝐨𝐢𝐧𝐭𝐦𝐞𝐧𝐭 & 𝐇𝐨𝐬𝐩𝐢𝐭𝐚𝐥 𝐌𝐚𝐧𝐚𝐠𝐞𝐦𝐞𝐧𝐭 𝐒𝐲𝐬𝐭𝐞𝐦 (𝐌𝐄𝐑𝐍)

A full-stack healthcare management platform built using the MERN stack. The application enables patients to book doctor appointments, doctors to manage availability and appointments, and administrators to manage doctors and monitor platform activities.

The system features role-based authentication, dedicated dashboards, appointment management, and Razorpay payment integration.

---

## Live Demo

Live link: https://doctor-appointment-system-mern.vercel.app

## 🔑 Demo Credentials

Explore the application using the following demo accounts.

| Role | Email | Password |
|---|---|---|
| Patient | `demo@gmail.com` | `demo@password` |
| Doctor | `emily@prescripto.com` | `emily123` |
| Admin | `admin@prescripto.com` | `qwerty123` |

### How to Access

1. Open the [Live Application](https://doctor-appointment-system-mern.vercel.app).
2. Select the appropriate role or navigate to the relevant login page.
3. Enter the demo credentials listed above.
4. Explore the features and dashboards available for that role.

**Note:** These are demonstration accounts intended for exploring the application's functionality.

---

Tech Stack

Frontend: React.js, Tailwind CSS, Axios, React Router DOM

Backend: Node.js, Express.js, REST APIs

Database: MongoDB

Authentication: JWT, Role-Based Access Control

Payment Integration: Razorpay

Deployment: Vercel, MongoDB Atlas

Key Features

Patient Module

Patient registration and login

Browse available doctors

Booyk appointments with doctors

View appointment histor

Online payment integration using Razorpay

Doctor Module

Dedicated doctor dashboard

View and manage appointments

Manage availability and appointment schedules

Admin Module

Dedicated administrator dashboard

Manage doctors and user records

Monitor appointments

Manage platform activities

Authentication & Security

JWT-based authentication

Role-based authorization for patients, doctors, and admins

Protected application routes

Payment Integration

Razorpay checkout integration for appointment payments

Payment confirmation through the Razorpay checkout flow

Project Structure

doctor-appointment-system-mern/
├── frontend/       # Patient-facing application
├── admin/          # Doctor and admin interfaces
├── backend/        # REST APIs and database logic
└── README.md

Local Setup

1. Clone the Repository

git clone https://github.com/itzharsh33/doctor-appointment-system-mern.git
cd doctor-appointment-system-mern

2. Backend Setup

cd backend
npm install
npm run dev

Configure the required MongoDB, JWT, and Razorpay environment variables according to the backend configuration.

3. Frontend Setup

cd frontend
npm install
npm run dev

4. Admin Panel Setup

cd admin
npm install
npm run dev

Key Learnings

Designing a full-stack MERN application with multiple user roles

Implementing JWT authentication and role-based authorization

Building REST APIs for appointment management

Integrating Razorpay checkout into a healthcare booking workflow

Managing MongoDB-backed application data

Deploying full-stack applications

Author

Harsh Kumar Yadav

B.Tech Computer Science & Engineering

GitHub: https://github.com/itzharsh33
