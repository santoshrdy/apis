const flightdetails = require("../models/getflightsdetails.model.js");
exports.findAllFlights = ((req, res) => {


    flightdetails.getflightsdetails( (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      else res.send(data);
    })
  })