var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "phpmyadmin",
  password: "flamengo",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(result.affectedRows + "Number of records deleted:" + result.affectedRows);
  });
});