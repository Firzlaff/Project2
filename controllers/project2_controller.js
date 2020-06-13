const express = require("express");
const router = express.Router();
const sql = require("../models/sql");

// Get Route to pull data from the DB 
router.get("/", async function (req, res) {
    let todoData;
    await sql.selectAll().then(function (res) {
        todoData = res;
    });
    let allWorkouts;
    await sql.selectAllWorkouts().then(function (res) {
        allWorkouts = res;
    });
    res.render("index", { todo: todoData, workout: allWorkouts });
});
// Post Route
router.post("/api/add", (req, res) => {
    sql.addTodo(req.body.addTodo);
    res.sendStatus(200).end();
});
// Update Route
router.put("/api/complete", (req, res) => {
    sql.completeTodo(req.body.id);
    res.sendStatus(200).end();
});
// Delete Route
router.delete("/api/delete", (req, res) => {
    sql.deleteTodo(req.body.id);
    res.sendStatus(200).end();
});

module.exports = router;
