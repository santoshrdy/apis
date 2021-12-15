const sql = require("./db.js");
const bcrypt = require('bcrypt')
const decode = require('jwt-decode')
// constructor
const payments = function(payments) {
  // this.id = tutorial.id;


  this.payment_type=payments.payment_type,
    this.cardname=payments.cardname,
    this.cardnumber=payments.cardnumber,
    this.cvv=payments.cvv,
    this.expiryyear=payments.expiryyear,
    this.expirymonth=payments.expirymonth,
    this.price_id=payments.price_id,
this.token = decode(payments.token)

};
payments.pay = (payments, result) => {
  const email = payments.token.email; 

  const query = "SELECT * FROM users WHERE email = ?"
 sql.query(query ,email, (err, res) => {
const emailChecker= res;
console.log(res)
  if(emailChecker.length > 0 ) {
  
    if(res.length > 0 ) {
      const {token,...passsengers} = payments;
      sql.query("INSERT INTO payment SET ?", {userid:res[0].userid,...passsengers}, (err, res1) => {
        console.log(err)
        if(err) {
          result(null, err)
        } else {
    
          const email = payments.token.userid; 

          const query = "SELECT * FROM reservation WHERE userid = ?"
         sql.query(query ,email, (err, res4) => {
           if(err) {
result(null,err)
           } else {
            const email = payments.token.userid; 

            const query = "SELECT * FROM pricedetails WHERE userid = ?"
           sql.query(query ,email, (err, res5) => {
if(err) {

} else {
  const email = payments.token.userid; 

            const query = "SELECT * FROM users WHERE userid = ?"
           sql.query(query ,email, (err, res6) => { 
if(err) {
result(null,res6)
} else {
  result(null, {success:1,message:"Payment successfully", invoicedetails:{...res4[0], ...res5[0],...res6[0]}})
}

           })
 
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
  module.exports = payments;