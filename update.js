var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "phpmyadmin",
  password: "flamengo",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "UPDATE customers SET address = 'Cayon 123' WHERE address = 'Valley 345'";
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(result.affectedRows + "Record(s) updated");
  });
});