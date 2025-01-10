# MySQL REST API

## 📄 Introduction

This project is a RESTful API built with Node.js, Express, and MySQL. It provides endpoints to manage employees in a database, allowing CRUD operations such as creating, reading, updating, and deleting employee records.

## 🛠️ Features

- **CRUD Operations**: Perform operations on employee data; fetching all employees, fetching an employee by ID, adding a new employee, updating employee information, and deleting an employee.
- **MySQL Integration**: Uses MySQL for data storage and retrieval.
- **Environment Configuration**: Utilizes environment variables for secure configuration.
- **Modular Architecture**: Organized codebase with controllers, routes, and configuration modules.
- **Error Handling**: Handles errors with meaningful responses.

## 🛰️ Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Minimalist web framework for building web applications.
- **MySQL2**: Library for connecting to the MySQL database.
- **dotenv**: For managing environment variables.
- **Nodemon**: For development convenience with automatic server restarts.

## 📋 Setup Instructions

### Prerequisites

- Node.js installed on your system.
- MySQL database set up and running.

### Steps to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/MartinXCVI/node-mysql-rest-api.git
   cd node-mysql-rest-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:

    Create a `.env` file in the root directory and add the following variables:
     ```env
     PORT=3000
     DB_USER=<user>
     DB_PASS=<password>
     DB_HOST=localhost
     DB_NAME=<database>
     DB_PORT=3306
     ```

4. Start the server:
    
    In development mode:
    ```bash
    npm run dev
    ```
   
   In production mode:
    ```bash
    npm start
    ```

5. Test the API:
   
    The server will start at `http://localhost:3000`. Use a tool like Postman or Insomnia to test the endpoints.

## 📡 API Endpoints

### Base URL
`http://localhost:3000/api`

### Endpoints

#### **Ping the Server**
- **URL**: `/ping`
- **Method**: GET
- **Description**: Verifies that the server is running.
- **Response**:
  ```json
  {
    "result": "Pong"
  }
  ```

#### **Get All Employees**
- **URL**: `/employees`
- **Method**: GET
- **Description**: Fetch all employee records.
- **Response**:
  ```json
  [
    { "id": 1, "name": "John Doe", "salary": 50000 },
    { "id": 2, "name": "Jane Smith", "salary": 60000 }
  ]
  ```

#### **Get Employee by ID**
- **URL**: `/employees/:id`
- **Method**: GET
- **Description**: Fetch a specific employee by ID.
- **Response (Success)**:
  ```json
  { "id": 1, "name": "John Doe", "salary": 50000 }
  ```
- **Response (Not Found)**:
  ```json
  { "message": "Employee not found or does not exist" }
  ```

#### **Create Employee**
- **URL**: `/employees`
- **Method**: POST
- **Description**: Add a new employee.
- **Request Body**:
  ```json
  { "name": "Alice", "salary": 55000 }
  ```
- **Response**:
  ```json
  { "id": 3, "name": "Alice", "salary": 55000 }
  ```

#### **Update Employee**
- **URL**: `/employees/:id`
- **Method**: PATCH
- **Description**: Update an existing employee's details.
- **Request Body**:
  ```json
  { "name": "Alice Johnson", "salary": 58000 }
  ```
- **Response**:
  ```json
  [ { "id": 3, "name": "Alice Johnson", "salary": 58000 } ]
  ```

#### **Delete Employee**
- **URL**: `/employees/:id`
- **Method**: DELETE
- **Description**: Delete an employee by ID.
- **Response (Success)**: Status Code `204` (No Content).
- **Response (Not Found)**:
  ```json
  { "message": "Employee not found or does not exist" }
  ```

## 🗂️ Project Structure

```
project-root/
├── node_modules
├── src/
│   ├── config/
│   │   ├── config.js          # Environment variables configuration
│   │   ├── dbConnection.js    # MySQL connection pool
│   ├── controllers/
│   │   ├── employees.controllers.js # CRUD logic for employees
│   │   ├── index.controllers.js     # Ping endpoint
│   ├── routes/
│   │   ├── employees.routes.js     # Routes for employees
│   │   ├── index.routes.js         # Route for ping
│   ├── app.js             # Express application setup
│   └── index.js           # Entry point
├── .env                   # Environment variables file
├── .gitignore
├── package-lock.json
├── package.json
└── README.md              # Project documentation
```

## 📚 Learn More
- [Node.js latest documentation](https://nodejs.org/docs/latest/api/)
- [Nodemon project website](https://nodemon.io/)
- [Getting started with Express.js](https://expressjs.com/en/starter/installing.html)
- [Dotenv repository](https://github.com/motdotla/dotenv#readme)
- [MySQL2 official documentation](https://sidorares.github.io/node-mysql2/docs)

## 🧑‍💻 Developer:

- [**MartinXCVI**](https://github.com/MartinXCVI)