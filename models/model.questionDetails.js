module.exports = (sequelize, Sequelize) => {
    
    const QuestionDetails = sequelize.define("QUESTION_DETAILS", {
      questionId: {
        type: Sequelize.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
      },
      questionText: {
        type: Sequelize.TEXT,     // equal to VARCHAR(255)
        allowNull: false
      },
      classId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'CLASS_DETAILS',
            key: 'class_id',
            deferrable: Sequelize.INITIALLY_IMMEDIATE
          }
      },
      answer: {
          type: Sequelize.STRING,
          allowNull:false
      },
      score: {
        type: Sequelize.INTEGER,
        allowNull:false
    }
    },{
        freezeTableName: true,
        timestamps: false,
        underscored: true,
        underscoredAll: true
    });
  
    return QuestionDetails;
  };