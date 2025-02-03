# Number Classification API

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Installation Instructions](#installation)
4. [API Endpoints](#api-endpoints)
5. [Testing Instructions](#testing-instructions)
6. [Technologies Used](#technologies-used)
7. [Contribution Guidelines](#contribution-guidelines)
8. [Acknowledgments](#acknowledgments)

## Project Overview

The **Number Classification API** provides a set of endpoints to classify numbers based on several mathematical properties, such as prime, perfect, Armstrong, odd, and even. In addition, the API fetches a fun fact related to the number from the Numbers API.

## Features

- **Prime Number Check**: Determines whether the number is prime.
- **Perfect Number Check**: Determines whether the number is perfect.
- **Armstrong Number Check**: Determines whether the number is an Armstrong number.
- **Odd or Even Check**: Classifies the number as odd or even.
- **Digit Sum Calculation**: Calculates the sum of the digits of the number.
- **Fun Fact Retrieval**: Fetches a fun fact related to the number using an external API.

## Installation

Follow the steps below to get this project up and running on your local machine.

### Prerequisites

Before getting started, ensure that you have the following software installed on your machine:

- [Node.js](https://nodejs.org/en/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Clone the repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/G4EVA-dev/Number-Classification-API
cd number-classification-api
```


### Install dependencies

Use npm to install the project’s dependencies:

```bash
npm install
```

### Configuration

Create a `.env` file in the root of the project directory and set up the following variables:

```bash
PORT=3000
```

### Running the project

Start the development server:

```bash
npm run dev
```

The server will be available at [http://localhost:3000](http://localhost:3000).

## API Endpoints

### `GET /api/classify-number?number=<number>`

This endpoint takes a number and classifies it based on various properties. It also returns a fun fact related to the number.

#### Query Parameters

- `number` (required): The number to classify.

#### Response Example

```json
{
  "number": 153,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 9,
  "fun_fact": "153 is a narcissistic number."
}
```

#### Response Fields

- `number`: The number provided in the query.
- `is_prime`: Boolean value indicating whether the number is prime.
- `is_perfect`: Boolean value indicating whether the number is perfect.
- `properties`: An array of properties such as `armstrong`, `odd`, `even`.
- `digit_sum`: The sum of the digits of the number.
- `fun_fact`: A fun fact related to the number fetched from an external API.

#### Error Responses

- **400 Bad Request**: If the `number` query parameter is missing or invalid.
  
  Example response:
  ```json
  {
    "number": "abc",
    "error": true
  }
  ```

- **500 Internal Server Error**: If there’s an error processing the request.

  Example response:
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

## Testing Instructions

To ensure the quality and reliability of the API, you can run the tests provided in this project.

### Running tests

To run the tests for the project, use the following command:

```bash
npm run test
```

This will run the unit tests for the core functions and API endpoints. Make sure that you have installed all dependencies first.

## Technologies Used

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A fast, unopinionated, minimalist web framework for Node.js, used to build the API.
- **Axios**: A promise-based HTTP client for making requests to external APIs (used to fetch fun facts).
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript. It provides static type checking, making the code more reliable and maintainable.
- **CORS**: Middleware to enable cross-origin resource sharing, allowing requests from different origins.

## Contribution Guidelines

We welcome contributions to the **Number Classification API** project! If you would like to contribute, please follow these steps:

1. **Fork the repository** to your own GitHub account.
2. **Clone the forked repository** to your local machine.
3. **Create a new branch** (`git checkout -b feature-branch`).
4. **Make your changes** and commit them (`git commit -am 'Add new feature'`).
5. **Push your changes** to your forked repository (`git push origin feature-branch`).
6. **Open a pull request** to the main repository, describing the changes you made and why they are beneficial.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **The Numbers API**: Used to fetch fun facts about numbers.
- **Express**: For making web application development simple and fast.
- **TypeScript**: To help ensure the quality and maintainability of the project codebase.
- [Fun Fact API](http://numbersapi.com/#42)   
- [Wikipedia Math Parity](https://en.wikipedia.org/wiki/Parity_(mathematics))   

---

For more information, feel free to open an issue or contact the project maintainers. Contributions, issues, and suggestions are always welcome!

For the latest updates and features, check out the [GitHub repository](https://github.com/G4EVA-dev/Number-Classification-API).
