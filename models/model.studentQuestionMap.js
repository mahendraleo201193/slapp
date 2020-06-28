module.exports = (sequelize, Sequelize) => {
    
    const StudentQuestionMap = sequelize.define("STUDENT_QUESTION_MAP", {
      mapId: {
        type: Sequelize.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
      },
      studentUsername: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: 'STUDENTS',
            key: 'username',
            deferrable: Sequelize.INITIALLY_IMMEDIATE
          }
      },
      questionId: {
        type: Sequelize.INTEGER,     // equal to VARCHAR(255)
        allowNull: false,
        references: {
            model: 'QUESTION_DETAILS',
            key: 'question_id',
            deferrable: Sequelize.INITIALLY_IMMEDIATE
          }
      },
      classId: {
        type: Sequelize.INTEGER,     // equal to VARCHAR(255)
        allowNull: false,
        references: {
            model: 'CLASS_DETAILS',
            key: 'class_id',
            deferrable: Sequelize.INITIALLY_IMMEDIATE
          }
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      answer: {
          type: Sequelize.STRING,
          allowNull: true
      }
    },{
        freezeTableName: true,
        timestamps: false,
        underscored: true,
        underscoredAll: true
    });
  
    return StudentQuestionMap;
  };