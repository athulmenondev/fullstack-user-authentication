# fullstack-user-authentication
This repository contains a full-stack implementation of user authentication features, including user registration (signup) and login. 
The frontend is built with React, and the backend API is developed using Spring Boot.



# fullstack-user-authentication

This repository contains a full-stack web application demonstrating user authentication (login and signup) using a React frontend and a Spring Boot backend.

## Overview

This project showcases a basic implementation of user authentication features, allowing users to:

* **Sign Up (Register):** Create new accounts by providing a username, password, email, and phone number.
* **Log In:** Authenticate existing users using their username and password.

The frontend is built with React, providing the user interface and handling user interactions. The backend API, developed using Spring Boot, handles user data management, authentication logic, and responds to requests from the frontend.

## Technologies Used

**Frontend:**

* React
* MUI

**Backend:**

* Spring Boot
* Java
* Spring Data JPA (for database interaction)
* PostgreSQL (as the database)
* Spring Web

## Setup and Installation

To run this project locally, you'll need to have Node.js and Java (JDK) installed on your system.

**Backend Setup (Spring Boot):**

1.  Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2.  Ensure you have Maven or Gradle installed.
3.  Run the Spring Boot application:
    ```bash
    # Using Maven
    ./mvnw spring-boot:run

    # Using Gradle
    ./gradlew bootRun
    ```
    The backend server will typically start on `http://localhost:8080`.

**Frontend Setup (React):**

1.  Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2.  Install the dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```
3.  Start the React development server:
    ```bash
    npm start
    # or
    yarn start
    ```
    The frontend application will typically open in your browser at `http://localhost:3000`.

## API Endpoints

**Backend (Spring Boot):**

* `POST /api/users/login`: Authenticates a user and returns user details upon successful login.
* `POST /api/users/signup`: Registers a new user.

**Frontend (React):**

* `/signup`: Route for the user registration page.
* `/login`: Route for the user login page.

## Future Enhancements (Optional)

* Implement secure password hashing on the backend (using BCrypt).
* Add input validation on both the frontend and backend.
* Implement user session management and authentication tokens (e.g., JWT).
* Add error handling and informative error messages for the user.
* Implement user profile management.

