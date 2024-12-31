Features

User Authentication:

Signup and Login functionality with password encryption using bcrypt.

Secure authentication with JSON Web Tokens (JWT).

Blog Management:

Create, edit, update, and delete blog posts.

List all blogs and view individual blogs.

Responsive Design:

Fully responsive UI using CSS frameworks like Tailwind or Bootstrap.

RESTful API:

Backend APIs built using Express.js for seamless communication with the frontend.

Database Integration:

MongoDB for storing user and blog data.

Tech Stack

Frontend

React.js: For building the user interface.

Axios: For API requests.

React Router: For navigation.

CSS Framework: Tailwind CSS or Bootstrap for styling.

Backend

Node.js: JavaScript runtime for the server.

Express.js: For creating RESTful APIs.

JSON Web Tokens (JWT): For secure authentication.

Database

MongoDB: NoSQL database for storing user and blog data.

Additional Tools

Mongoose: For MongoDB object modeling.

dotenv: For environment variable management.

Installation and Setup

Prerequisites

Node.js (v14 or higher)

MongoDB (running locally or on a cloud service like MongoDB Atlas)

Steps

Clone the repository:

git clone https://github.com/your-username/MernBlogApp.git
cd MernBlogApp

Install dependencies for both frontend and backend:

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

Set up environment variables:

Create a .env file in the backend folder.

Add the following environment variables:

PORT=5000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key

Start the development servers:

# Start backend server
cd backend
npm run dev

# Start frontend server
cd ../frontend
npm start

Open your browser and navigate to http://localhost:3000.

Folder Structure

MernBlogApp
├── backend
│   ├── models
│   ├── routes
│   ├── controllers
│   ├── middleware
│   └── server.js
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── context
│   │   └── App.js
└── README.md

API Endpoints

User Routes

POST /api/auth/signup: Register a new user.

POST /api/auth/login: Authenticate a user and generate a token.

Blog Routes

GET /api/blogs: Fetch all blogs.

GET /api/blogs/:id: Fetch a single blog by ID.

POST /api/blogs: Create a new blog post (requires authentication).

PUT /api/blogs/:id: Update a blog post (requires authentication).

DELETE /api/blogs/:id: Delete a blog post (requires authentication).

Future Enhancements

Add search and filter functionality for blogs.

Implement pagination for blog listings.

Enhance UI with animations and better design.

Deploy the app to a cloud platform (e.g., AWS, Heroku, or Vercel).

License

This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments

React.js Documentation

Express.js Documentation

MongoDB Documentation
