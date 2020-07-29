module.exports = function(sequelize, DataTypes) {
    var Tip = sequelize.define("Tip", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tip: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    });
    return Tip;
  };
  