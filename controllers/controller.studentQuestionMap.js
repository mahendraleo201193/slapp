const db = require("../models");
const StudentQuestionMap = db.StudentQuestionMap;
const QuestionDetails = db.QuestionDetails;

exports.create = (req, res) => {

    StudentQuestionMap.bulkCreate(req.body)
    .then(data => {
        res.status(200)
        .send("student question map created !");
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occured while creating student question map !"
        });
    });
 };

 exports.findOne = (req, res) => {
    const username = req.params.username;
    const classId = req.params.classId;
    var rows = [];
    var counter = 1;
    StudentQuestionMap.findAll({
        where: {
            studentUsername: username,
            classId: classId,
            active: true
        }
    })
      .then(data => {
        
        data.forEach(row => { 
            row = row.toJSON();
            QuestionDetails.findByPk(row.questionId).then(questionDetail => {
                row["questionText"] = questionDetail.questionText;
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

  exports.update = (req, res) => {
    console.log("Inside Update !!");
    console.log(JSON.parse(req.body.questions));
    const studentUsername = req.params.username;
    const classId = req.params.classId;
  
      var data = JSON.parse(req.body.questions);
      var count = 0;
      for(var i=0; i< data.length;i++){
          //console.log(data[i]);
          //console.log(i);
          StudentQuestionMap.update(data[i], {
            where: { 
              studentUsername: studentUsername,
              classId: classId,
              questionId: data[i].questionId
             }
          })
            .then(num => {
              if (num == 1) {
                if(count==data.length-1){
                  res.send({
                    message: "updated successfully."
                  });
                  return
                }
                count++;
              } else {
                res.status(500);
                res.send({
                  message: `Can't Update. ${num}`
                });
                return;
              }
            })
            .catch(err => {
              res.status(500).send({
                message: err
              });
              return;
            });
      }

      /*
      StudentQuestionMap.update(req.body, {
      where: { 
        studentUsername: studentUsername,
        classId: classId
       }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "updated successfully."
          });
        } else {
          res.send({
            message: `Can't Update.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: err
        });
      });
      */
  };