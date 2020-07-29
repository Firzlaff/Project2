/* eslint-disable no-var */
module.exports = function(sequelize, DataTypes) {
    var Note = sequelize.define("Note", {
      complete: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      note: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    });
    return Note;
  };
  