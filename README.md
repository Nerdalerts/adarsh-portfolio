# Adarsh's Portfolio

Welcome to Adarsh's Portfolio! This project showcases the skills and projects of Adarsh, a student at DTU, batch of 2027. The portfolio is built using a React frontend and an Express backend, with MongoDB as the database.

## Project Structure

The project is organized into two main parts: the backend and the frontend.

```
adarsh-portfolio
├── backend          # Contains the backend application
│   ├── src
│   │   ├── app.js                  # Entry point for the backend
│   │   ├── controllers             # Contains request handlers
│   │   │   └── index.js
│   │   ├── models                  # Mongoose models
│   │   │   └── user.js
│   │   ├── routes                  # API routes
│   │   │   └── index.js
│   │   └── config                  # Database configuration
│   │       └── db.js
│   ├── package.json                # Backend dependencies and scripts
│   └── README.md                   # Documentation for the backend
├── frontend         # Contains the frontend application
│   ├── src
│   │   ├── App.js                  # Main React component
│   │   ├── components              # Reusable components
│   │   │   └── Portfolio.js
│   │   ├── pages                   # Different pages of the portfolio
│   │   │   └── Home.js
│   │   └── styles                  # CSS styles
│   │       └── main.css
│   ├── package.json                # Frontend dependencies and scripts
│   └── README.md                   # Documentation for the frontend
├── .gitignore       # Files to ignore in Git
└── README.md       # Overview of the entire project
```

## Features

- Interactive user interface showcasing Adarsh's skills and projects.
- Backend API to manage user data and portfolio information.
- Smooth and responsive design for an enhanced user experience.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/adarsh-portfolio.git
   cd adarsh-portfolio
   ```

2. Set up the backend:
   - Navigate to the backend directory:
     ```
     cd backend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Configure your MongoDB connection in `src/config/db.js`.
   - Start the backend server:
     ```
     npm start
     ```

3. Set up the frontend:
   - Navigate to the frontend directory:
     ```
     cd ../frontend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Start the frontend application:
     ```
     npm start
     ```

## License

This project is licensed under the MIT License.