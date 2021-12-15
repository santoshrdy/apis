const Flightstatus = require("../models/flightstatus.model.js");

// Create and Save a new Tutorial
exports.status = (req, res) => {

  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const flightstatus = new Flightstatus({
token:req.get('authorization')

  });

  // Save Tutorial in the database
  Flightstatus.status(flightstatus, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });

};


