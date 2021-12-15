const passengers = require("../models/passengers.model.js");

// Create and Save a new Tutorial
exports.create = (req, res) => {
  console.log('paddd')
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const users = new passengers({


   infants : req.body.infants,
   children : req.body.children,
   adults : req.body.adults,
 userid : req.body.userid,
 email:req.body.email  ,
token:req.get('authorization')

  });

  // Save Tutorial in the database
  passengers.savepassengers(users, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });

};


