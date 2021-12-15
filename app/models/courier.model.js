const sql = require("./db.js");
const bcrypt = require('bcrypt');
const decode = require('jwt-decode');
const courierTrack = function(courierTrack) {
    // this.id = tutorial.id;
  this.token = this.token = decode(courierTrack.token)
   
  };
  courierTrack.track = ( courierTrack,result) => {
    const userid = courierTrack.token.userid; 
    const query = "SELECT * FROM courier WHERE userid= ?"
    sql.query(query, userid,(err, res) => {
        if(err) {
            result(500, err)
        } else {
            result(null, res)
        }
                })    
    };
  
  module.exports = courierTrack;