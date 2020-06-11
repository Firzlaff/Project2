const connection = require("./connection");

const orm = {
    selectAll: function () {
        return new Promise(function (resolve, reject) {
            const queryString = "SELECT * FROM notes;";
            connection.query(queryString, function (err, data) {
                if (err) throw err;
                resolve(data);
            });
        });
    }
}

module.exports = orm;