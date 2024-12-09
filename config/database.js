//importing libraries
import mysql from 'mysql2/promise';
import 'dotenv/config';



// Create the connection to database
const connection = await mysql.createConnection({
  //process.env grabs the values from the env file
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
  }
);

//exports the function to use in other files
export default connection;
