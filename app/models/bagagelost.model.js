const sql = require("./db.js");
const bcrypt = require('bcrypt');
const decode = require('jwt-decode');
const baggagelost = function(baggagelost) {
    // this.id = tutorial.id;
  this.token = this.token = decode(baggagelost.token)
   
  };
  baggagelost.lost = ( baggagelost,result) => {
    const userid = baggagelost.token.userid; 
    const query = "SELECT * FROM baggagelost WHERE userid= ?"
    sql.query(query, userid,(err, res) => {
        if(err) {
            result(500, err)
        } else {
        
            result(null, res)
        }
                })
     
    };
  
  module.exports = baggagelost;