const orm = require("../config/orm");

const project2 = {
    selectAll: function () {
        return new Promise(function (resolve, reject) {
            orm.selectAll().then(function (res) {
                resolve(res);
            });
        });
    }
}

module.exports = project2;