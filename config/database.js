//import mysql2
import mysql from 'mysql2/promise';
import 'dotenv/config';


console.log(process.env.DB_USER)
// Create the connection to database
const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
  // port: process.env.PORT || 3306,
  }
);

// const connection = await mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'fintech',
// });


console.log("Database Connected")
export default connection;

// A simple SELECT query
// try {
//   const [results, fields] = await connection.query(
//     'CREATE TABLE users(User_id int(50) primary key);',
//   );

//   console.log(results); // results contains rows returned by server
//   console.log(fields); // fields contains extra meta data about results, if available
// } catch (err) {
//   console.log(err);
// }