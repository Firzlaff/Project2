const connection = require("../config/connection");

const project2 = {
     // Funciton to get all todo/note from the Heroku DB 
    selectAll: function () {
        return new Promise(function (resolve, reject) {
            const queryString = "SELECT * FROM notes;";
            connection.query(queryString, function (err, data) {
                if (err) throw err;
                resolve(data);
            });
        });
    },
     // Funciton to add a todo/note from the Heroku DB 
    addTodo: function (todo) {
        const queryString = "INSERT INTO notes (note, complete) VALUES (?, 0);"
        connection.query(queryString, todo, err => {
            if (err) throw err;
        });
    },
    // Funciton to update/save a todo/note from the Heroku DB 
    completeTodo: function (id) {
        const queryString = "UPDATE notes SET complete = 1 WHERE id = ?;";
        connection.query(queryString, id, err => {
            if (err) throw err;
        });
    },
    // Funciton to delete a todo/notes from the Heroku DB 
    deleteTodo: function (id) {
        const queryString = "DELETE FROM notes WHERE id = ?;";
        connection.query(queryString, id, err => {
            if (err) throw err;
        });
    },
    // Funciton to select all workouts from the Heroku DB 
    selectAllWorkouts: function () {
        return new Promise(function (resolve, reject) {
            const queryString = "SELECT * FROM workouts;";
            connection.query(queryString, function (err, data) {
                if (err) throw err;
                resolve(data);
            });
        });
    },
    // Funciton to select all health and wellness tips from the Heroku DB 
    selectAllTips: function () {
        return new Promise(function (resolve, reject) {
            const queryString = "SELECT * FROM Tips;";
            connection.query(queryString, function (err, data) {
                if (err) throw err;
                resolve(data);
            });
        });
    }
}

module.exports = project2;
