const sql = require("./db.js");
const bcrypt = require('bcrypt');
const flightsdetails = function() {
    // this.id = tutorial.id;
  
   
  };
  flightsdetails.getflightsdetails = ( result) => {
    sql.query("SELECT * FROM flights ", (err, res) => {
        if(err) {
            result(500, err)
        } else {
            result(null, res)
        }
                })
     
    };
  
  module.exports = flightsdetails;