const db = require("../models");
const Students = db.Students;

exports.create = (req, res) => {
  
    
    console.log("Inside Student Create methos !!");
    console.log(req.body);
    if (!req.body.username) {
       res.status(400).send({
         message: "Content can not be empty!"
       });
       return;
     }

     // Check is the account is already exists
     Students.count({
        where: {
          username: req.body.username
        }
      }).then(num => {
          if(num > 0){
                res.status(500)
                .send("User "+req.body.username+" already exists !");
          }else{
                Students.create(req.body)
                .then(data => {
                    res.status(200)
                    .send("students created !");
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                        err.message || "Some error occured while creating student !"
                    });
                });
          }
      });
 };

 exports.auth = (req,res) => {

    Students.count({
        where: {
          username: req.body.username,
          password: req.body.password
        }
      }).then(num => {
          if(num > 0){
                req.session.loggedin = true;
                req.session.username = req.body.username;
                res.status(200)
                .send("Successfully Logged in !");
                return;
          }else{
                res.status(500)
                .send("Incorrect Username or Password !")
          }
      });

 };