const sql = require("./db.js");
const bcrypt = require('bcrypt')
const decode = require('jwt-decode')
// constructor
const passengers = function(passengers) {
  // this.id = tutorial.id;


  this.infants = passengers.infants;
  this.children = passengers.children;
  this.adults = passengers.adults;
this.token = decode(passengers.token)

};
passengers.savepassengers = (passengers, result) => {
  const email = passengers.token.email; 

  const query = "SELECT * FROM users WHERE email = ?"
 sql.query(query ,email, (err, res) => {
const emailChecker= res;
console.log(res)
  if(emailChecker.length > 0 ) {
  
    if(res.length > 0 ) {
      const passsengers = {infants:passengers.infants,children:passengers.children,adults:passengers.adults};
      sql.query("INSERT INTO passengers SET ?", {userid:res[0].userid,...passsengers}, (err, res1) => {
        console.log(err)
        if(err) {
          result(null, err)
        } else {
    
      
          result(null, {success:1,message:"saved successfully"})
         
        }

      })
      
    } else {
      result(null, {message:res})
    }
  
  
  }
   
    }, err => {
      result(500, err)
    });
   
  };
  module.exports = passengers;