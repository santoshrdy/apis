const Payments = require("../models/payment.model.js");

// Create and Save a new Tutorial
exports.pay = (req, res) => {
console.log(req)
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const payments = new Payments({

    payment_type: req.body.payment_type,
    cardname : req.body.cardname,
    cardnumber : req.body.cardnumber,
    cvv : req.body.cvv,
    expiryyear: req.body.expiryyear,
    expirymonth : req.body.expirymonth,
    price_id : req.body.price_id,
token:req.get('authorization')

  });

  // Save Tutorial in the database
  Payments.pay(payments, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });

};


