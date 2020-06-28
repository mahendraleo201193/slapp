module.exports = (sequelize, Sequelize) => {
    
    const StudentClassMap = sequelize.define("STUDENT_CLASS_MAP", {
      mapId: {
        type: Sequelize.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
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
      studentUsername: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: 'STUDENTS',
            key: 'username',
            deferrable: Sequelize.INITIALLY_IMMEDIATE
          }
      }
    },{
        freezeTableName: true,
        timestamps: false,
        underscored: true,
        underscoredAll: true
    });
  
    return StudentClassMap;
  };