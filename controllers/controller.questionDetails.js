const db = require("../models");
const QuestionDetails = db.QuestionDetails;

exports.create = (req, res) => {

    QuestionDetails.bulkCreate(req.body)
    .then(data => {
        res.status(200)
        .send("Question created !");
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occured while creating Question !"
        });
    });
 };