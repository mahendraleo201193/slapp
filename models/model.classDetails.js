module.exports = (sequelize, Sequelize) => {
    
    const ClassDetails = sequelize.define("CLASS_DETAILS", {
      classId: {
        type: Sequelize.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
      },
      className: {
        type: Sequelize.STRING,     // equal to VARCHAR(255)
        allowNull: false
      },
      gradeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'GRADE_DETAILS',
            key: 'grade_id',
            deferrable: Sequelize.INITIALLY_IMMEDIATE
          }
      }
    },{
        freezeTableName: true,
        timestamps: false,
        underscored: true,
        underscoredAll: true
    });
  
    return ClassDetails;
  };