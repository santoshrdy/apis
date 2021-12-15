const sql = require("./db.js");

// constructor
// const Tutorial = function(tutorial) {
//   // this.id = tutorial.id;

//   this.lastname = tutorial.lastname;
//   this.firstname = tutorial.firstname;
//   this.password = tutorial.password;
//   this.gender = tutorial.gender;
//   this.mobile = tutorial.mobile;
//   this.email = tutorial.email;
// };

// Tutorial.create = (newTutorial, result) => {
//   sql.query("SELECT * FROM USERS ", newTutorial, (err, res) => {
// console.log(res)
// if(res.find(ele => ele.email !== newTutorial.email)) {
// console.log('test')
//   sql.query("INSERT INTO users SET ?", newTutorial, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }

//     console.log("created tutorial: ", { id: res.insertId, ...newTutorial });
//     result(null, { id: res.insertId, ...newTutorial });
//   });
// } else {
//   result(null,"email exists")
// }
//   });
 
// };




