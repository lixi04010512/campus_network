var mysql=require('mysql');

let connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"task7"
  })

connection.connect();

module.exports=connection;