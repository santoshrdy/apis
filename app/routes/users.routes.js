module.exports = app => {
    const tutorials = require("../controllers/users.controller.js");
  const loginUser = require('../controllers/login.controller.js')
    var router = require("express").Router();
    const getFlights = require("../controllers/getflightsdetails.controller.js")
 const createPassengers = require('../controllers/passengers.controller.js');
 const reservation = require('../controllers/reservation.controller.js');
 const booking = require('../controllers/booking.controller.js');
 const pricing = require('../controllers/pricing.controller.js');
 const payments = require('../controllers/payment.controller.js');
 const flightstatus = require('../controllers/flightstatus.controller.js');
 const webcheckin = require('../controllers/webcheckin.controller.js');
 const baggagelost = require('../controllers/baggagelost.controller.js');
 const courier = require('../controllers/courier.controller.js');
  const {checktoken} = require('../auth/token.validation')
    // Create a new Tutorial
    router.get("/getflightsdetails", checktoken, getFlights.findAllFlights);
    router.post("/createpassengers", checktoken, createPassengers.create);
    router.post("/reservation", checktoken, reservation.create);
    router.post("/booking", checktoken, booking.create);
    router.get("/pricing", checktoken, pricing.price);
    router.post("/payments", checktoken, payments.pay);
    router.get("/flightstatus", checktoken, flightstatus.status);
    router.get("/webcheckin", checktoken, webcheckin.checkin);
    router.get("/baggagelost", checktoken, baggagelost.lost);
    router.get("/courier", checktoken, courier.track);
    // Create a new Tutorial 
    router.post("/signup", tutorials.create);
  
    router.post("/login", loginUser.create);
  
  
    app.use('/api/', router);
  };