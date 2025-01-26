# TargetR

**TargetR** is a high-performance backend application written in TypeScript that provides a RESTful API to analyze and prioritize enemy targets based on strategic protocols. It leverages Clean Architecture and Domain-Driven Design (DDD) principles, ensuring clarity, modularity, and scalability.

The application processes input data such as enemy coordinates and protocols (e.g., prioritize mech, avoid allies) to determine the optimal target for engagement. Built with Express, it features comprehensive testing with Jest, enhanced security via Helmet, and rate limiting for reliability under high-concurrency scenarios.

## Requirements to run it locally:
- **Node.js**: Backend runtime environment.
- **TypeScript**: For type safety and maintainability.
- **Express**: Framework for handling HTTP requests.
- **Jest**: Testing framework for unit and integration tests.
- **Helmet**: Middleware for securing HTTP headers.
- **express-rate-limit**: Middleware for request rate limiting.

## Installation instructions:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ivancardozo11/TargetR.git
