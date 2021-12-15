const sql = require("./db.js");
const bcrypt = require('bcrypt')
const decode = require('jwt-decode')
// constructor
const pricing = function(pricing) {
  // this.id = tutorial.id;
// console.log(pricing)
//  this.class =pricing.class,
//  this.seat =pricing.seat,
//  this.meal =pricing.meal,
//  this.baggage = pricing.baggage,
this.token= decode(pricing.token)

};
pricing.priceCal = (pricing, result) => {
  const email = pricing.token.email; 
  const userid = pricing.token.userid; 
  const query = "SELECT * FROM users WHERE email = ?"
 sql.query(query ,email, (err, res) => {
const emailChecker= res;
  if(emailChecker.length > 0 ) {

    if(res.length > 0 ) {
        const email = pricing.token.userid; 
        console.log(email)
        const query = "SELECT * FROM booking_info WHERE userid = ?"
       sql.query(query ,email, (err, res2) => {
            if(err) {
            result(null,err)
            } else {
      
                const pricing = {};
                const pricingInfo = res2;
                typeof(pricingInfo)
                // pricingInfo.seat = Number(pricingInfo.seat);
                // pricingInfo.baggage = Number(pricingInfo.baggage);
                console.log(pricingInfo)
            if(res2[0].class.toLowerCase() === 'economy') {
                pricing.taxes = 50;
                pricing.meal_cost =  80;
                pricing.seat_cost = Number(pricingInfo[0].seat) * 200;
                pricing.baggage_cost = Number(pricingInfo[0].baggage) * 50;
            }
            if(res2[0].class.toLowerCase() === 'business') {
                pricing.taxes = 100;
                pricing.meal_cost = 180;
                pricing.seat_cost =  Number(pricingInfo[0].seat) * 300;
                pricing.baggage_cost = Number(pricingInfo[0].baggage) * 80;
            }
            // const {token,...reservationData}=pricing;
            sql.query("INSERT INTO pricedetails SET ?", {userid:res2[0].userid,...pricing},(err, res1) => {
              console.log(err)
              if(err) {
                result(null, err)
              } else {
                console.log(pricing)
                // const email = pricing.token.userid; 
                // console.log(email)
                const query = "SELECT * FROM pricedetails WHERE userid = ?"
                sql.query(query ,userid, (err, res3) => { 
if(err) {
result(null,err)
} else {
  result(null, {success:1,message:pricing})
}

                })
         
               
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
  module.exports = pricing;