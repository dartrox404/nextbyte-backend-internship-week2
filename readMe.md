![Week 2 Banner](https://capsule-render.vercel.app/api?type=rounded&color=0:0F2027,100:203A43&height=180&section=header&text=HTTP%20%26%20REST%20API&fontSize=35&fontColor=ffffff&animation=fadeIn&desc=Week%2002%20%E2%80%94%20Backend%20Development&descSize=15&descAlignY=75)

<div align="center">

# 🚀 Week 2 — HTTP & REST API Basics

**Building REST APIs with Node.js and Express.js**

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![REST API](https://img.shields.io/badge/REST-API-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Progress-Completed%20Basics-success?style=for-the-badge)

</div>

---

## 📌 Overview

This project focuses on understanding **HTTP methods and REST API fundamentals** using Node.js and Express.js.

The goal is to learn how to create API endpoints, handle HTTP requests, return appropriate status codes, and structure JSON responses.

## 🛠️ Tech Stack

<div align="center">

![Tech Stack](https://skillicons.dev/icons?i=nodejs,express,js,postman,vscode,git&theme=dark)

</div>

## 📂 Project Structure

```text
week-02/src
│
├── app/
│   └── app.js
│
├── controller/
│   └── controller.js
│
├── routes/
│   └── app_route.js
│
├── server/
│   └── server.js
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

## 🔗 HTTP Methods Implemented

| Method | Endpoint | Description |
|---|---|---|
| 🟢 GET | `/api/v2/get` | Example GET request |
| 🟡 POST | `/api/v2/post` | Example POST request |
| 🔵 PUT | `/api/v2/put` | Example PUT request |
| 🔴 DELETE | `/api/v2/remove` | Example DELETE request |
| 🟢 GET | `/health` | Server health check |

## 📊 HTTP Status Codes

| Code | Status | Description |
|---|---|---|
| `200` | OK | Successful request |
| `201` | Created | Resource created successfully |
| `404` | Not Found | Requested endpoint doesn't exist |
| `500` | Internal Server Error | Unexpected server error |

## 📡 API Documentation

### 1. GET — Retrieve Data

**Endpoint:** `GET /api/v2/get`

**Response:**

```json
{
  "success": true,
  "message": "This is example of 200 http code (api is working fine)"
}
```

**Status:** `200 OK`

### 2. POST — Create Data

**Endpoint:** `POST /api/v2/post`

**Response:**

```json
{
  "success": true,
  "message": "This is example of 201 http code (Object has been created)"
}
```

**Status:** `201 Created`

### 3. PUT — Update Data

**Endpoint:** `PUT /api/v2/put`

**Response:**

```json
{
  "success": true,
  "message": "This is example of 200 http code (Object has been updated)"
}
```

**Status:** `200 OK`

### 4. DELETE — Remove Data

**Endpoint:** `DELETE /api/v2/remove`

**Response:**

```json
{
  "success": true,
  "message": "This is example of 200 http code (Object has been removed)"
}
```

**Status:** `200 OK`

### 5. Health Check

**Endpoint:** `GET /health`

**Response:**

```json
{
  "success": true,
  "message": "Server is healthy"
}
```

**Status:** `200 OK`

## ⚙️ Installation & Setup

**1. Clone the repository**

```bash
git https://github.com/dartrox404/nextbyte-backend-internship-week2.git
```

**2. Install dependencies**

```bash
npm install
```

**3. Configure environment variables**

Create a `.env` file:

```env
PORT=8080
URL=http://localhost:8080
```

**4. Start the server**

```bash
nodemon server/server.js
npm run dev 
```

**5. Test API endpoints**

Use Postman or Thunder Client.

Base URL:

```text
http://localhost:8080
```

## 🧠 Key Learnings

- Understanding HTTP request methods.
- Creating API endpoints using Express Router.
- Separating routes and controllers.
- Returning structured JSON responses.
- Using appropriate HTTP status codes.
- Understanding REST API fundamentals.
- Implementing basic error handling.
- Configuring Express middleware.

## 🎯 Next Goals

- Implement PATCH functionality.
- Build resource-based REST endpoints.
- Implement actual CRUD operations.
- Handle request parameters and request bodies.
- Improve centralized error handling.

---

<div align="center">

**Learning Backend Development — One Week at a Time.**

⭐ If you find this project useful, consider giving it a star!

</div>