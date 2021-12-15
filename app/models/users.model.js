const sql = require("./db.js");
const bcrypt = require('bcrypt')
// constructor
const users = function(users) {
  // this.id = tutorial.id;

  this.lastname = users.lastname;
  this.firstname = users.firstname;
  this.password = users.password;
  this.gender = users.gender;
  this.mobile = users.mobile;
  this.email = users.email;
};
users.signup = (newTutorial, result) => {
  const email = newTutorial.email;
  const query = "SELECT * FROM users WHERE email = ?"
 sql.query(query ,email, (err, res) => {
const emailChecker= res
  if(emailChecker.length === 0) {
    bcrypt.hash(newTutorial.password,10, (err,hash) =>{
      if(err) {
   result(500, err)
      } else {
        newTutorial.password = hash
        sql.query("INSERT INTO users SET ?", newTutorial, (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }
          result(null, {success:1,message:'registered successfully'});
        });
      }
       })
  
  
  }
   else {
    result(null,{success:0,message:"email already exists"})
  }
    }, err => {
      result(500, err)
    });
   
  };
  module.exports = users;