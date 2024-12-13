# FinTech Application

This is a simple application that allows users to manage their transactions. The app tracks the users' balances and transaction details using a database.

## Features
- **User Registration**: Users can create accounts by providing a name, username, email, and password.
- **User Authentication**: Users can log in to access their accounts.
- **Transaction Management**: Users can create transactions (deposits or withdrawals) to manage their balance.
- **Database Management**: Sequelize is used for defining models and syncing tables to MySQL.

## Technologies Used
- **Node.js**: JavaScript runtime for building the backend.
- **MySQL**: Relational database for storing user and transaction data.
- **dotenv**: A package to load environment variables from `.env` files (for sensitive data such as DB credentials).

## Setup & Installation

### Prerequisites
- Node.js installed on your machine (version >= 14.x).
- MySQL or a MySQL-compatible database running.
