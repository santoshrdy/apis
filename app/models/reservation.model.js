const sql = require("./db.js");
const bcrypt = require('bcrypt')
const decode = require('jwt-decode')
// constructor
const reservation = function(reservation) {
  // this.id = tutorial.id;

  this.firstname=reservation.firstname,
    this.lastname =reservation.lastname,
    this.date_of_birth=reservation.date_of_birth,
    this.passport_no=reservation.passport_no,
    this.gender=reservation.gender,
this.token= decode(reservation.token)

};
reservation.savereservation = (reservation, result) => {
  const email = reservation.token.email; 
  const query = "SELECT * FROM users WHERE email = ?"
 sql.query(query ,email, (err, res) => {
const emailChecker= res;
  if(emailChecker.length > 0 ) {
  
    if(res.length > 0 ) {
        const email = reservation.token.userid; 
        console.log(email)
        const query = "SELECT * FROM passengers WHERE userid = ?"
       sql.query(query ,email, (err, res) => {
           console.log(err)
           if(err) {
result(null,err);
           } else {
              
            const {token,...reservationData}=reservation;
            sql.query("INSERT INTO reservation SET ?", {userid:res[0].userid,...reservationData, ['passenger_id']:res[0]['passenger_id']}, (err, res1) => {
              console.log(err)
              if(err) {
                result(null, err)
              } else {
          
            
                result(null, {success:1,message:"saved successfully"})
               
              }
      
            })
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
  module.exports = reservation;