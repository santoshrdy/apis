const Users = require("../models/users.model.js");

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const users = new Users({
 lastname :req.body.lastname,
 firstname : req.body.firstname,
 password : req.body.password,
 gender : req.body.gender,
 mobile : req.body.mobile, 
 email : req.body.email,

  });

  // Save Tutorial in the database
  Users.signup(users, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });

};


