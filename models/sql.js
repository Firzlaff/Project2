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
    }
}

module.exports = project2;