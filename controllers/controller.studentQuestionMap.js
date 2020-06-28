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