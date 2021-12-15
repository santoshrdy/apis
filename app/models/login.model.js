const sql = require("./db.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const loginUser = function(loginUser) {
    this.password = loginUser.password;
    this.email = loginUser.email;
  };
  loginUser.login = (newTutorial, result) => {
    const email = newTutorial.email;
       var query = "SELECT * FROM users WHERE email = ?"
      sql.query(query ,email, (err, res) => {
  const emailChecker= res;
console.log(newTutorial.password)
  if(emailChecker.length < 1) {
result(null, {message:'Email or password invalid'})
  }

else {
    
  bcrypt.compare(newTutorial.password,emailChecker[0].password,  (err,result1) => {
  console.log(result1)
      if(err) {
  
        result(null, err)
      }
      if(result1) {
      
        
          if(res) {
            // const t  =res.filter(ele => ele.email === newTutorial.email)
   
            if(res.length > 0 ) {
              sql.query("INSERT INTO login SET ?", {id:res[0].userid,email:newTutorial.email}, (err, res1) => {
                if(err) {
        
                  result(null, err)
                } else {
                 const r =  res;
               const token =  jwt.sign({userid: res[0].userid, email:res[0].email, password:res[0].password}, 'secret@123', {expiresIn:'10h'})
                  result(null, {message:'login successfuuly',userid:res[0].userid, email:res[0].email,token:token})
                 
                }
      
              })
              
            } else {
              result(null, {message:res})
            }
          
          } else {
            result(null, err)
          }
          
                 
       
           
  
  
      } else {
        result(null,{message:'Email or password invalid'})
      }
    
    }, err => {
     
      result(null, err)
    })
}

    
      }, err => {
        result(500, err)
      });
     
    };
  
  module.exports = loginUser;