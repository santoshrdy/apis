const sql = require("./db.js");
const bcrypt = require('bcrypt')
const decode = require('jwt-decode')
// constructor
const booking = function(booking) {
  // this.id = tutorial.id;
console.log(booking)
 this.class =booking.class,
 this.seat =booking.seat,
 this.meal =booking.meal,
 this.baggage = booking.baggage,
this.token= decode(booking.token)

};
booking.bookingInfo = (booking, result) => {
  const email = booking.token.email; 
  const query = "SELECT * FROM users WHERE email = ?"
 sql.query(query ,email, (err, res) => {
const emailChecker= res;
  if(emailChecker.length > 0 ) {

    if(res.length > 0 ) {
        const email = booking.token.userid; 
        console.log(email)
        const query = "SELECT * FROM reservation WHERE userid = ?"
       sql.query(query ,email, (err, res) => {
           if(err) {
result(null,err)
           } else {
            const {token,...reservationData}=booking;
            console.log(booking)
            sql.query("INSERT INTO booking_info SET ?", {userid:res[0].userid,...reservationData, booking_id:res[0]['booking_id']}, (err, res1) => {
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
  module.exports = booking;