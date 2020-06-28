module.exports = (sequelize, Sequelize) => {
    
    const GradeDetails = sequelize.define("GRADE_DETAILS", {
      gradeId: {
        type: Sequelize.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
      },
      gradeNumber: {
        type: Sequelize.INTEGER,     // equal to VARCHAR(255)
        allowNull: false
      },
      gradeBoard: {
        type: Sequelize.STRING,
        allowNull: false
      }
    },{
        freezeTableName: true,
        timestamps: false,
        underscored: true,
        underscoredAll: true
    });
  
    return GradeDetails;
  };