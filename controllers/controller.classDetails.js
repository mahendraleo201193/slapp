const db = require("../models");
const ClassDetails = db.ClassDetails;

exports.create = (req, res) => {

    ClassDetails.bulkCreate(req.body)
    .then(data => {
        res.status(200)
        .send("class created !");
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occured while creating class !"
        });
    });
 };