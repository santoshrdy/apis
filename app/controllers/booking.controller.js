const Booking = require("../models/booking.model.js");

// Create and Save a new Tutorial
exports.create = (req, res) => {
console.log(req)
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const booking = new Booking({

    "class" :req.body.class,
  "seat" :req.body.seat,
  "meal" :req.body.meal,
  baggage:req.body.baggage,
token:req.get('authorization')

  });

  // Save Tutorial in the database
  Booking.bookingInfo(booking, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });

};


