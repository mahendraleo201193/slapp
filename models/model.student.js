module.exports = (sequelize, Sequelize) => {
    
    const Students = sequelize.define("STUDENTS", {
      studentd: {
        type: Sequelize.INTEGER,
        unique: true,
        autoIncrement: true
      },
      username: {
        type: Sequelize.STRING,     // equal to VARCHAR(255)
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      city: {
          type: Sequelize.CHAR(20),
          allowNull: false
      },
      age: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      board: {
          type: Sequelize.STRING,
          allowNull: false
      },
      grade: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
    },{
        freezeTableName: true,
        timestamps: false,
        underscored: true,
        underscoredAll: true
    });
  
    return Students;
  };