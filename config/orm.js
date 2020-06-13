const connection = require("./connection");

const orm = {
    // Routes for Notes/Todo Section, will select all notes/todo's from the database and display them to the user.
    selectAllNotes: function () {
        return new Promise(function (resolve, reject) {
            const queryString = "SELECT * FROM notes;";
            connection.query(queryString, function (err, data) {
                if (err) throw err;
                resolve(data);
            });
        });
    },
    // selectAllWorkouts for the DBfull week.
    selectAllWorkouts: function () {
        return new Promise(function (resolve, reject) {
            const queryString = "SELECT * FROM workouts;";
            connection.query(queryString, function (err, data) {
                if (err) throw err;
                resolve(data);
            });
        });
    },


    //Select a random or that days workout for them. 


}

module.exports = orm;