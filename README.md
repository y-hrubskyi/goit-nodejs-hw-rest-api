# Phonebook API

Welcome to the Phonebook API repository! This API provides a powerful solution for managing personal contacts within a secure environment. Users can create accounts, authenticate, and manage their personal contact lists. The API supports operations such as adding, updating, retrieving, and deleting contacts associated with user accounts.

## Features

- **User Authentication:** Register and login to create a secure account.
- **Personal Contacts:** Manage your own contact list with CRUD operations.
- **Swagger Documentation:** Explore the API using interactive Swagger documentation.

## Tech Stack

- **Node.js:** JavaScript runtime for server-side development.
- **Express.js:** Web application framework for Node.js.
- **MongoDB:** NoSQL database for storing contact information.
- **Mongoose:** ODM library for MongoDB and Node.js.
- **Swagger:** API documentation tool for better understanding and testing.

## Project Structure

```plaintext
goit-nodejs-hw-rest-api/
|-- src/                # Source code
|   |-- config/         # Configuration files
|   |-- controllers/    # Request handlers for each route
|   |-- docs/           # API documentation files
|   |-- helpers/        # Helper functions and utilities
|   |-- middlewares/    # Middleware functions for request processing
|   |-- models/         # Data models and schemas
|   |-- routes/         # Route definitions
|   |-- services/       # Business logic services
|   |-- validators/     # Request validation schemas
|   |-- index.js        # Entry point for the application
|-- .env.example        # Example environment variables configuration
|-- package.json        # Project configuration and dependencies
```

## Getting Started

These instructions will help you set up and run the Phonebook API on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm or yarn installed

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/y-hrubskyi/goit-nodejs-hw-rest-api.git

    cd goit-nodejs-hw-rest-api
    ```

2.  Install dependencies:

    ```bash
    # npm
    npm install

    # yarn
    yarn install
    ```

3.  Set up environment variables:

    ```bash
    cp .env.example .env
    # open .env and adjust the values according to your preferences
    ```

    ```bash
    # MongoDB URI
    MONGODB_URI=mongodb://localhost:27017/phonebook

    # Port for the server
    PORT=3000

    # JWT Secret Key for authentication
    JWT_SECRET_KEY=your-secret-key

    # SendGrid sender email and API key for email services
    SENDGRID_SENDER_EMAIL=your-sender-email@example.com
    SENDGRID_API_KEY=your-sendgrid-api-key

    # Cloudinary URL for cloud-based image storage
    CLOUDINARY_URL=your-cloudinary-url

    # Backend URL for external services integration
    BACKEND_URL=http://localhost:3000
    ```

### Run the application:

1. Run app using following command:

   ```bash
   # npm
   npm start

   # yarn
   yarn start
   ```

## API Documentation

Explore the API using the interactive Swagger documentation. Access the documentation at:

[Swagger Documentation](https://phonebook-api-kwd5.onrender.com/api-docs)

Happy coding!
