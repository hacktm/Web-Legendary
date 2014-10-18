var mysql      = require('mysql');
connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'thunder',
  password : '123321',
  database : 'mestereste'
});