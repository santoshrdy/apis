const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

var connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});
connection.getConnection(err => {
  if(!err){
    console.log('connected');
  } else {
    console.log(err);
  }
})
module.exports = connection;
