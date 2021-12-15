const CourierTrack = require("../models/courier.model.js");

// Create and Save a new Tutorial
exports.track = (req, res) => {

  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const courierTrack = new CourierTrack({
token:req.get('authorization')

  });

  // Save Tutorial in the database
  CourierTrack.track(courierTrack, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });

};


