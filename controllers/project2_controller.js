const express = require("express");
const router = express.Router();
const sql = require("../models/sql");

router.get("/", async function (req, res) {
    let data;
    await sql.selectAll().then(function (res) {
        data = res;
    });
    res.render("index", { sql: data });
});

router.post("/api/add", (req, res) => {
    sql.addTodo(req.body.addTodo);
    res.sendStatus(200).end();
})

module.exports = router;