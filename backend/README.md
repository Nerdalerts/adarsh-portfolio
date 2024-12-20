# Adarsh Portfolio Backend

This is the backend part of the Adarsh Portfolio project, built using Node.js, Express, and MongoDB. The backend serves as an API to manage user data and portfolio information.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/adarsh-portfolio.git
   ```

2. Navigate to the backend directory:
   ```
   cd adarsh-portfolio/backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Set up your MongoDB connection in `src/config/db.js`.

5. Start the server:
   ```
   npm start
   ```

## Usage

The backend API provides endpoints to manage user data and portfolio items. You can interact with these endpoints using tools like Postman or through the frontend application.

## API Endpoints

- `GET /api/users` - Retrieve all users
- `POST /api/users` - Create a new user
- `GET /api/users/:id` - Retrieve a user by ID
- `PUT /api/users/:id` - Update a user by ID
- `DELETE /api/users/:id` - Delete a user by ID

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose

For more information, refer to the individual files in the `src` directory.