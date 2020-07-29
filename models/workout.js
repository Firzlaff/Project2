module.exports = function(sequelize, DataTypes) {
    var Workout = sequelize.define("Workout", {
      day: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      workout: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
     
    });
    return Workout;
  };
  