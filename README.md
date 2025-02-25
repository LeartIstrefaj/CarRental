# Car Rental App

## How to Start
1. Clone the repository from GitHub.
2. Run `npm install` to install dependencies.
3. Create a `.env` file and add the required environment variables.
4. Start the server using `npm start` or `node src/server.js`.

## Endpoints
- **POST /register**: Register a new user.

- **POST /login**: Login and get a JWT token.

- **GET /my-profile**: Get the logged-in user's profile (requires authentication).

- **GET /rental-cars**: Get a list of available cars (supports filtering by year, color, steering type, and number of seats).

