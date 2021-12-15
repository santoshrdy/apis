const Baggagelost = require("../models/bagagelost.model.js");

// Create and Save a new Tutorial
exports.lost = (req, res) => {

  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const baggagelost = new Baggagelost({
token:req.get('authorization')

  });

  // Save Tutorial in the database
  Baggagelost.lost(baggagelost, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });

};


