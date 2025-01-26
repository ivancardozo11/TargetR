# TargetR v1.0.0

<div style="max-width: 600px; margin: 0 auto;">
 <p align="center"> 
 <img src="TargetRLogo.png" width="500" height="400" alt="Image">
</p>
</div>

</div>


**TargetR** is a high-performance backend application written in TypeScript that provides a RESTful API to analyze and prioritize enemy targets based on strategic protocols. It leverages Clean Architecture and Domain-Driven Design (DDD) principles, ensuring clarity, modularity, and scalability.

The application processes input data such as enemy coordinates and protocols (e.g., prioritize mech, avoid allies) to determine the optimal target for engagement. Built with Express, it features comprehensive testing with Jest, enhanced security via Helmet, and rate limiting for reliability under high-concurrency scenarios.

## Requirements to run it locally:

* [NodeJS](https://nodejs.org/en/download "NodeJS") Backend runtime environment.
* [Typescript](https://www.npmjs.com/package/typescript) For type safety and maintainability.
* [Docker](https://www.docker.com/) To build development images.
* [Jest](https://jestjs.io/es-ES/) Testing framework for unit and integration tests.
* [Express](https://www.npmjs.com/package/express) Framework for handling HTTP requests.
* [Helmet](https://www.npmjs.com/package/helmet) Middleware for securing HTTP headers.
* [Inversify (Powerful dependency injection library)](https://inversify.io/) for dependency injection

## Installation instructions:

### Step 1: Clone the repository
```
git clone https://github.com/ivancardozo11/TargetR.git
```
### Step 2: Install dependencies

Navigate to the project directory and install all required packages:
`cd path/to/TargetR`
```
npm install
```
### Step 3: Run the app server
Start the development environment for testing and debugging:
```
npm run start
```

### Additionally you can run test manually: Run tests
To verify the app functionality with unit and integration tests:
```
npm run test
```
# API Highlights:

* **Endpoint:** `/radar` 
* **Method:** `POST` 
* **Input:** JSON with `protocols` and `scan` data. 
* **Output:** Coordinates `{x, y}` of the optimal target.

# Features:

* **Implements strategic protocols to prioritize targets dynamically.**

* **Built with scalability and security in mind.**
* **Easily extendable to support new protocols or requirements.**
* **Explore the codebase for more details and usage instructions.**