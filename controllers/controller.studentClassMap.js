const db = require("../models");
const StudentClassMap = db.StudentClassMap;
const ClassDetails = db.ClassDetails;

exports.create = (req, res) => {

    StudentClassMap.bulkCreate(req.body)
    .then(data => {
        res.status(200)
        .send("student class map created !");
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occured while creating student class map !"
        });
    });
 };

 exports.findOne = (req, res) => {
    const username = req.params.username;
    var rows = [];
    var counter = 1;
    StudentClassMap.findAll({
        where: {
            studentUsername: username
        }
    })
      .then(data => {
        
        data.forEach(row => { 
            row = row.toJSON();
            ClassDetails.findByPk(row.classId).then(classDetail => {
                row["className"] = classDetail.className;
                rows.push(row);
                if(counter++ == data.length){
                  res.send(rows);
                }
            });
          });

      })
      .catch(err => {
        res.status(500).send({
          message: err
        });
      });
  };