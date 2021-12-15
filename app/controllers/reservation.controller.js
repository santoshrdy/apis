const Reservation = require("../models/reservation.model.js");

// Create and Save a new Tutorial
exports.create = (req, res) => {

  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const reservation = new Reservation({

    "firstname": req.body.firstname,
    "lastname" :req.body.lastname,
    "date_of_birth": req.body.date_of_birth,
    "passport_no": req.body.passport_no,
    "gender": req.body.gender,
token:req.get('authorization')

  });

  // Save Tutorial in the database
  Reservation.savereservation(reservation, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });

};


