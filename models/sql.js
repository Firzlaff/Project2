const connection = require("../config/connection");

const project2 = {
    selectAll: function () {
        return new Promise(function (resolve, reject) {
            const queryString = "SELECT * FROM notes;";
            connection.query(queryString, function (err, data) {
                if (err) throw err;
                resolve(data);
            });
        });
    },
    addTodo: function (todo) {
        const queryString = "INSERT INTO notes (note, complete) VALUES (?, 0);"
        connection.query(queryString, todo, err => {
            if (err) throw err;
        });
    },
    completeTodo: function (id) {
        const queryString = "UPDATE notes SET complete = 1 WHERE id = ?;";
        connection.query(queryString, id, err => {
            if (err) throw err;
        });
    },
    deleteTodo: function (id) {
        const queryString = "DELETE FROM notes WHERE id = ?;";
        connection.query(queryString, id, err => {
            if (err) throw err;
        });
    },
    selectAllWorkouts: function () {
        return new Promise(function (resolve, reject) {
            const queryString = "SELECT * FROM workouts;";
            connection.query(queryString, function (err, data) {
                if (err) throw err;
                resolve(data);
            });
        });
    }
}

module.exports = project2;