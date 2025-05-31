# Sport Station

A full-stack e-commerce web application for sports apparel, particularly focusing on jerseys.

## Overview

Sport Station is an e-commerce platform built with React.js for the front-end and Node.js/Express for the backend. It allows users to browse, purchase sports apparel, and manage their shopping carts and orders. The application includes features like user authentication, product management, shopping cart functionality, and payment processing.

## Features

- **User Authentication**: Sign up, login, and profile management
- **Product Browsing**: View all available products with details
- **Shopping Cart**: Add/remove items, view cart contents
- **Checkout Process**: Enter shipping details and choose payment method
- **Order Management**: Track order status and history
- **Admin Panel**: Add new products and manage orders (for admin users)
- **Payment Integration**: Support for both Cash on Delivery and online payment

## Tech Stack

### Front-end
- React.js
- Material-UI components
- React Router for navigation
- Context API for state management
- Styled Components for custom styling
- Axios for API requests

### Back-end
- Node.js with Express
- MySQL database
- Express sessions for authentication
- CORS for cross-origin requests
- SSL Commerz for payment processing

## Project Structure

```
.
├── client/               # React front-end
│   ├── public/           # Static assets
│   └── src/
│       ├── components/   # React components
│       ├── context/      # Context providers
│       ├── hooks/        # Custom hooks
│       └── resources/    # Images and other resources
└── server/               # Node.js back-end
    ├── routes/           # API route definitions
    └── server.js         # Express server setup
```

## Getting Started

### Prerequisites
- Node.js and npm
- MySQL

### Installation

1. Clone the repository
```
git clone https://github.com/mmmim24/Sport-Station.git
cd Sport-Station
```

2. Install server dependencies
```
cd server
npm install
```

3. Install client dependencies
```
cd ../client
npm install
```

4. Set up your MySQL database
   - Create a database named `sportStation`
   - Import the database schema (not included in repo)

### Running the Application

1. Start the backend server
```
cd server
npm start
```

2. Start the frontend development server
```
cd client
npm start
```

3. The application will be available at `http://localhost:3000`

## User Roles

- **Regular User**: Can browse products, add to cart, place orders, and view order history
- **Admin User**: Has additional permissions to add products and manage all orders

## API Endpoints

- `/products` - Get all products
- `/product/:id` - Get a specific product
- `/login` - User authentication
- `/signup` - User registration
- `/profile` - Get user profile
- `/orders` - Get all orders (admin) or user orders
- `/order` - Create new order
- `/shipping` - Add shipping information

## Color Scheme

- Primary Green: `#4DB768`
- Secondary Purple: `#5A39DD`
- Accent Orange: `#F85938`

## Contributors

- [mustaqmujahidmim@gmail.com](mailto:mustaqmujahidmim@gmail.com)
- [soebshihab@gmail.com](mailto:soebshihab@gmail.com)


## License

ISC
