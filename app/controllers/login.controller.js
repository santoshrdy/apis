const loginUser = require("../models/login.model.js");
exports.create = ((req, res) => {

    const users = new loginUser({
     
      password : req.body.password,
 
      email : req.body.email,
     
       });
       
       loginUser.login(users, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      else res.send(data);
    })

  })