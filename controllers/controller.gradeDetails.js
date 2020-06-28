const db = require("../models");
const GradeDetails = db.GradeDetails;

exports.create = (req, res) => {

    GradeDetails.bulkCreate(req.body)
    .then(data => {
        res.status(200)
        .send("grade created !");
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occured while creating grade !"
        });
    });
 };