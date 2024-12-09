import DB_Connect from "./config/database.js";

//Attempts to authenticate a connection
try {
    await DB_Connect.execute(
        `
        CREATE TABLE users(
        user_id int auto_increment primary key,
        user_name varchar(50),
        ser_password varchar(50),
        user_email varchar(50)
        );
        `
    );
    await DB_Connect.execute(
        `
        CREATE TABLE transactions( 
        transaction_id INT AUTO_INCREMENT PRIMARY KEY, 
        user_id INT NOT NULL, 
        amount DECIMAL(10, 2) NOT NULL, 
        transaction_type ENUM('DEPOSIT', 'WITHDRAWAL') NOT NULL, 
        transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(user_id)); 
        `
    );
    console.log('Connection has been established successfully.');
} 

// FOREIGN KEY (account_id) REFERENCES accounts(account_id) );

catch (error) {
    // When/If an error is caught, an error message will display
    console.error('Unable to connect to the database:', error);

}
  