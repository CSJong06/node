//import mysql2
import mysql2 from 'mysql2/promise';

// Create the connection to database
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test',
});

// A simple SELECT query
try {
  const [results, fields] = await connection.query(
    'CREATE TABLE users(User_id int(50) primary key);',
  );

  console.log(results); // results contains rows returned by server
  console.log(fields); // fields contains extra meta data about results, if available
} catch (err) {
  console.log(err);
}