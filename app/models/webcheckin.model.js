const sql = require("./db.js");
const bcrypt = require('bcrypt');
const decode = require('jwt-decode');
const checkin = function(checkin) {
    // this.id = tutorial.id;
  this.token = this.token = decode(checkin.token)
   
  };
  checkin.checkin = ( checkin,result) => {
    const userid = checkin.token.userid; 
    const query = "SELECT * FROM webcheckin "
    sql.query(query, userid,(err, res) => {
        if(err) {
            result(500, err)
        } else {
            result(null, res)
        }
                })
     
    };
  
  module.exports = checkin;