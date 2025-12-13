# 🚗 Vehicle Rental System – Backend API

## 📌 Project Overview

The **Vehicle Rental System** is a robust backend API built to manage a complete vehicle rental workflow. It supports vehicle inventory management, customer accounts, secure authentication, and booking lifecycle handling with role-based access control.

This project follows a **modular, feature-based architecture** with clear separation of concerns, making it scalable, maintainable, and production-ready.

---

## 🌍 Live URL

**API Base URL:** `https://your-live-api-url.com/api/v1`

> ℹ️ Replace this URL with your deployed backend URL (Vercel / Render / Railway / etc.).

---

## ✨ Key Features

### 🔐 Authentication & Authorization

* JWT-based authentication
* Secure password hashing using **bcrypt**
* Role-based access control (**Admin** & **Customer**)

### 🚘 Vehicle Management (Admin)

* Add, update, view, and delete vehicles
* Track vehicle availability (`available`, `booked`)

### 👤 User Management

* User registration & login
* Admin can manage all users
* Customers can update their own profile

### 📅 Booking System

* Create vehicle bookings with date validation
* Automatic total price calculation
* Booking lifecycle management (`active`, `cancelled`, `returned`)
* Prevents invalid actions (e.g., deleting active bookings)

### 🧱 Clean Architecture

* Feature-based modules
* Clear layering: **Routes → Controllers → Services → Database**

---

## 🛠️ Technology Stack

* **Node.js**
* **TypeScript**
* **Express.js**
* **PostgreSQL**
* **bcrypt** (password hashing)
* **jsonwebtoken (JWT)**

---

## 📂 Project Structure

```
src/
├── app.ts
├── server.ts
├── config/
│   ├── db.ts
│   └── env.ts
├── middleware/
│   ├── auth.ts
│   └── errorHandler.ts
├── modules/
│   ├── auth/
│   │   ├── auth.route.ts
│   │   ├── auth.controller.ts
│   │   └── auth.service.ts
│   ├── users/
│   │   ├── user.route.ts
│   │   ├── user.controller.ts
│   │   └── user.service.ts
│   ├── vehicles/
│   │   ├── vehicle.route.ts
│   │   ├── vehicle.controller.ts
│   │   └── vehicle.service.ts
│   └── bookings/
│       ├── booking.route.ts
│       ├── booking.controller.ts
│       └── booking.service.ts
└── utils/
    └── jwt.ts
```

---

## 📊 Database Schema

### Users

| Field    | Description                |
| -------- | -------------------------- |
| id       | Auto-generated primary key |
| name     | Required                   |
| email    | Unique, lowercase          |
| password | Hashed, min 6 characters   |
| phone    | Required                   |
| role     | `admin` or `customer`      |

### Vehicles

| Field               | Description                 |
| ------------------- | --------------------------- |
| id                  | Auto-generated              |
| vehicle_name        | Required                    |
| type                | `car`, `bike`, `van`, `SUV` |
| registration_number | Unique                      |
| daily_rent_price    | Positive number             |
| availability_status | `available` or `booked`     |

### Bookings

| Field           | Description                       |
| --------------- | --------------------------------- |
| id              | Auto-generated                    |
| customer_id     | FK → Users                        |
| vehicle_id      | FK → Vehicles                     |
| rent_start_date | Required                          |
| rent_end_date   | Must be after start date          |
| total_price     | Auto-calculated                   |
| status          | `active`, `cancelled`, `returned` |

---

## 🔗 API Endpoints Overview

### Authentication

| Method | Endpoint       | Access |
| ------ | -------------- | ------ |
| POST   | `/auth/signup` | Public |
| POST   | `/auth/signin` | Public |

### Vehicles

| Method | Endpoint               | Access |
| ------ | ---------------------- | ------ |
| POST   | `/vehicles`            | Admin  |
| GET    | `/vehicles`            | Public |
| GET    | `/vehicles/:vehicleId` | Public |
| PUT    | `/vehicles/:vehicleId` | Admin  |
| DELETE | `/vehicles/:vehicleId` | Admin  |

### Users

| Method | Endpoint         | Access      |
| ------ | ---------------- | ----------- |
| GET    | `/users`         | Admin       |
| PUT    | `/users/:userId` | Admin / Own |
| DELETE | `/users/:userId` | Admin       |

### Bookings

| Method | Endpoint               | Access           |
| ------ | ---------------------- | ---------------- |
| POST   | `/bookings`            | Customer / Admin |
| GET    | `/bookings`            | Role-based       |
| PUT    | `/bookings/:bookingId` | Role-based       |

> ⚠️ All endpoints strictly follow the provided **API Reference**.

---

## 📘 API Usage Examples

### 🔐 Authentication

**Signup**

```http
POST /api/v1/auth/signup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "01700000000",
  "role": "customer"
}
```

**Signin**

```http
POST /api/v1/auth/signin
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### 🚘 Create Vehicle (Admin)

```http
POST /api/v1/vehicles
Authorization: Bearer <ADMIN_TOKEN>
Content-Type: application/json

{
  "vehicle_name": "Toyota Corolla",
  "type": "car",
  "registration_number": "DHA-1234",
  "daily_rent_price": 3500,
  "availability_status": "available"
}
```

### 📅 Create Booking (Customer)

```http
POST /api/v1/bookings
Authorization: Bearer <CUSTOMER_TOKEN>
Content-Type: application/json

{
  "vehicle_id": 1,
  "rent_start_date": "2025-01-01",
  "rent_end_date": "2025-01-05"
}
```

---

## ⚙️ Setup & Usage Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/vehicle-rental-backend.git
cd vehicle-rental-backend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
DATABASE_URL=postgresql://username:password@localhost:5432/vehicle_rental
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
```

### 4️⃣ Run Database Migrations / Tables

Ensure PostgreSQL is running and required tables are created.

### 5️⃣ Start the Server

**Development Mode**

```bash
npm run dev
```

**Production Mode**

```bash
npm run build
npm start
```

---

## ✅ Usage Notes

* Use **Authorization Header** for protected routes:

  ```
  Authorization: Bearer <JWT_TOKEN>
  ```
* Admin privileges are required for vehicle and user management
* Customers can only manage their own bookings and profile

---

## 📜 License

This project is for educational and learning purposes.

---

## 👨‍💻 Author

**Md. Ikram Hossain**
Backend Developer | Node.js | TypeScript | PostgreSQL

---

🚀 *Ready for deployment and real-world extension!*
