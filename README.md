# Doctor Appointment & Hospital Management System (MERN)

A full-stack healthcare management platform built using the MERN stack that enables
patients to book doctor appointments, doctors to manage schedules, and admins to
control the system through a secure dashboard.

---

## Live Demo

Live link: https://event-front-end-mauve.vercel.app

## 🔑 Demo Credentials

Explore the application using the following demo accounts.

| Role | Email | Password |
|---|---|---|
| Patient | `demo@gmail.com` | `demo@password` |
| Doctor | `emily@prescripto.com` | `emily123` |
| Admin | `admin@prescripto.com` | `qwerty123` |

### How to Access

1. Open the [Live Application](https://event-front-end-mauve.vercel.app).
2. Select the appropriate role or navigate to the relevant login page.
3. Enter the demo credentials listed above.
4. Explore the features and dashboards available for that role.

**Note:** These are demonstration accounts intended for exploring the application's functionality.

---

## 🛠 Tech Stack

**Frontend**
- React.js
- Tailwind CSS
- Axios
- React Router DOM

**Backend**
- Node.js
- Express.js
- MongoDB
- JWT Authentication

**Admin Panel**
- React.js
- Role-based access control

**Deployment**
- Vercel
- MongoDB Atlas

---

##  Features

### Patient
- User registration & login
- Book doctor appointments
- View appointment history

### Doctor
- Doctor dashboard
- Manage appointments
- Availability management

### Admin
- Admin dashboard
- Manage doctors and users
- Appointment monitoring

### Security
- JWT-based authentication
- Protected routes
- Role-based authorization

---

## 📁 Project Structure

```text
doctor-appointment-system-mern/
├── frontend/    # Patient-facing application
├── admin/       # Admin dashboard
├── backend/     # REST APIs and database logic
└── README.md
```

---

## ⚙️ Local Setup (For Developers)

### 1️. Clone the repository
```bash
git clone https://github.com/itzharsh33/doctor-appointment-system-mern.git
cd doctor-appointment-system-mern


2️. Backend Setup
cd backend
npm install
npm run dev


Create a .env file inside the backend folder:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

3️. Frontend Setup
cd frontend
npm install
npm run dev

4️. Admin Panel Setup
cd admin
npm install
npm run dev



Key Learnings

Designing a scalable MERN architecture

Implementing JWT authentication and protected routes

Role-based access control (Patient / Doctor / Admin)

Frontend–backend integration using REST APIs

Deploying full-stack applications on Vercel


Author

Harsh Kumar Yadav
B.Tech CSE | MERN Stack Developer
