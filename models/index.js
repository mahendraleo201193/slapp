const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 'false',

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Students = require("../models/model.student.js")(sequelize, Sequelize);
db.ClassDetails = require("../models/model.classDetails.js")(sequelize, Sequelize);
db.GradeDetails = require("../models/model.gradeDetails.js")(sequelize, Sequelize);
db.QuestionDetails = require("../models/model.questionDetails.js")(sequelize, Sequelize);
db.StudentClassMap = require("../models/model.studentClassMap.js")(sequelize, Sequelize);
db.StudentQuestionMap = require("../models/model.studentQuestionMap.js")(sequelize, Sequelize);
module.exports = db;