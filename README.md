# To-Do List Application

## Overview
The To-Do List Application is a full-stack web application designed for efficient task management. Users can register, log in, and manage their personal tasks, while unauthorized users can view all tasks along with the owner’s name. The application includes secure user authentication using JWT and bcrypt.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)

## Features
- **User Authentication**:
  - User Sign Up, Sign In, and Sign Out
  - JWT-based authentication for secure access
- **Task Management**:
  - Add, edit, delete, and update tasks
  - Authorized users can manage their tasks
  - Unauthorized users can view tasks with the owner's name
- **Security**:
  - Passwords are hashed using bcrypt
  - JWT tokens are used to protect user sessions
- **Styling**:
  - Tailwind CSS for responsive and modern UI

## Technologies Used
- **Frontend**:
  - React.js (with Vite and Tailwind CSS)
  - React Router
  - Axios
- **Backend**:
  - Node.js
  - Express.js
- **Database**:
  - MongoDB (with Mongoose)
- **Authentication**:
  - JWT (JSON Web Tokens)
  - bcrypt


## Getting Started

### Prerequisites
- Node.js
- MongoDB
- Git

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/todo-app.git


**Install depandencies for frontend:**
```bash
  cd client
  npm install
```

**Install depandencies for backend:**
```bash
  cd ../server
  npm install
```

2. **Environment Variables Setup**:

**Create a .env file in the frontend directory and add the following:**
  - VITE_API_BASE_URL=your-backend-baseurl/api

**Create a .env file in the backend directory and add the following:**
  - PORT=your_backend_port
  - MONGO_URI=your_mongodb_connection_string
  - JWT_SECRET_KEY=your_jwt_secret_key

## Run the Application
- **Frontend:**
```bash
  cd ../client
  npm run dev
```

- **Backend:**
```bash
  cd ../server
  npm run dev
```