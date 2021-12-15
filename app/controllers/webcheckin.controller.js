const Checkin = require("../models/webcheckin.model.js");

// Create and Save a new Tutorial
exports.checkin = (req, res) => {

  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const checkin = new Checkin({
token:req.get('authorization')

  });

  // Save Tutorial in the database
  Checkin.checkin(checkin, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });

};


