const Pricing = require("../models/pricing.model.js");

// Create and Save a new Tutorial
exports.price = (req, res) => {
console.log(req)
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const pricing = new Pricing({
token:req.get('authorization')
  });

  // Save Tutorial in the database
  Pricing.priceCal(pricing, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });

};


