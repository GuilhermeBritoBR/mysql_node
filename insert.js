var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "phpmyadmin",
  password: "flamengo",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ('Company inc', 'Highway 37') "
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log("Insert");
  });
});