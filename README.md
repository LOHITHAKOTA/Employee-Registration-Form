# Employee Management System  
A full-stack web application built using **Spring Boot (Java)** for the backend and **ReactJS** for the frontend.  
This project allows users to **add, update, view, and manage employee details** with a clean UI and REST APIs.

---

## 🚀 Tech Stack

### **Frontend (ReactJS)**
- ReactJS (Functional Components)
- Axios for API calls
- React Router
- HTML5, CSS3, JavaScript

### **Backend (Spring Boot)**
- Spring Boot
- JDBC Template
- MySQL Database
- RESTful API structure

---

## 📌 Features

### ✔ **Frontend**
- Add employee  
- Update employee  
- View employee list  
- Modal popup for full details  
- Form validation  
- Responsive UI  

### ✔ **Backend**
- CRUD operations using REST API  
- Spring JDBC Template  
- MySQL integration  
- Employee model + service + controller  
- Input validation  
- Structured API responses  

---

## 📂 Project Structure

### **React**
```
src/
 ├── AddEmployee.js
 ├── UpdateEmployee.js
 ├── ShowEmployees.js
 ├── App.js
 ├── App.css
public/
package.json
```

### **Spring Boot**
```
src/
 ├── main/java/com/example/demo
 │      ├── Rdata.java
 │      ├── Rservice.java
 │      ├── Rcontroller.java
 │      └── DemoApplication.java
 ├── main/resources
 │      ├── application.properties
```

---

## 🔗 API Endpoints (Spring Boot)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/projects/add` | Add new employee |
| PUT    | `/projects/update` | Update employee |
| GET    | `/projects/all` | Get all employees |

---

## 🛠 How to Run Locally

### **1️⃣ Backend (Spring Boot)**

Clone the project:
```bash
git clone <your-repo-link>
cd backend
```

Run Spring Boot:
```bash
mvn spring-boot:run
```

Server runs at:
```
http://localhost:9999
```

---

### **2️⃣ Frontend (ReactJS)**

```bash
cd frontend
npm install
npm start
```

Runs at:
```
http://localhost:3000
```

---

## 📘 Database Setup (MySQL)

Create table:
```sql
CREATE TABLE Emp_details (
  fname VARCHAR(25),
  mname VARCHAR(25),
  lname VARCHAR(25),
  id INT PRIMARY KEY,
  email VARCHAR(30),
  phone VARCHAR(15),
  dob DATE,
  date DATE,
  salary BIGINT,
  address VARCHAR(100),
  gender VARCHAR(10),
  department VARCHAR(20),
  exp INT
);
```

---

## 🎯 Purpose of the Project
This project demonstrates full-stack development using modern tools.  
It is suitable for:

- Resume / Portfolio  
- Internship screening  
- Cognizant/Infosys/Accenture project submission  
- Understanding React + Spring integration  

---

## 🧑‍💻 Author
**Lohitha Kota**  
CSE | Java + Spring Boot + React Developer  

---

## 👍 Feel free to contribute or raise issues!

