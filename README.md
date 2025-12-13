# 🚗 Vehicle Rental System – Backend API

## 📌 Project Overview

The Vehicle Rental System is a back-end API designed to manage a comprehensive vehicle rental workflow. It supports vehicle inventory management, customer accounts, secure authentication, and booking lifecycle handling with role-based access control.

---

##  Live URL

API Base URL: https://vehicle-rental-system-lyart.vercel.app/

---

##  Key Features

### Authentication & Authorization

* JWT-based authentication
* Secure password hashing using **bcrypt**
* Role-based access control (**Admin** & **Customer**)

###  Vehicle Management (Admin)

* Add, update, view, and delete vehicles
* Track vehicle availability (`available`, `booked`)

###  User Management

* User registration & login
* Admin can manage all users
* Customers can update their own profile

###  Booking System

* Create vehicle bookings with date validation
* Automatic total price calculation
* Booking lifecycle management (`active`, `cancelled`, `returned`)
* Prevents invalid actions (e.g., deleting active bookings)

###  Clean Architecture

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


## ⚙️ Setup & Usage Instructions
### Prerequisites
Node.js 
PostgreSQL is installed and actively running
npm (comes bundled with Node.js)

###  Clone the Repository

```bash
git clone https://github.com/your-username/vehicle-rental-backend.git
cd vehicle-rental-backend
```

### Install Dependencies

```bash
npm install
```

###  Start the Server

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

## API Access

Once the server is running, the API will be available at:

  ```
   http://localhost:5000/api/v1/users
  ```
Use Postman to test endpoints.

---


