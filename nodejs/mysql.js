const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'hojoon',
  password : 'hojoon',
  database : 'nodejsStudy'
});
 
connection.connect();
 
connection.query('SELECT * from topic', (error, results, fields)=> {
  if (error) {
      console.log(error);
  }
  console.log(results);
});
 
connection.end();