const sql = require("./db.js");
const bcrypt = require('bcrypt');
const decode = require('jwt-decode');
const flightsdetails = function(flightsdetails) {
    // this.id = tutorial.id;
  this.token = this.token = decode(flightsdetails.token)
   
  };
  flightsdetails.status = ( flightsdetails,result) => {
    const userid = flightsdetails.token.userid; 
    const query = "SELECT * FROM flightstatus "
    sql.query(query, userid,(err, res) => {
        if(err) {
            result(500, err)
        } else {
            result(null, res)
        }
                })
     
    };
  
  module.exports = flightsdetails;