const express = require("express");
const router = express.Router();
const sql = require("../models/sql");

// Get Route to pull data from the DB 
router.get("/", async function (req, res) {
    let data;
    await sql.selectAll().then(function (res) {
        data = res;
    });
    res.render("index", { sql: data });
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

//Routes for the Weekly workouts
// router.get("/", async function (req, res) {
//     console.log("route here");
//     let data;
//     await sql.selectAllWorkouts().then(function (res) {
//         data = res;
//     });
//     console.log(data);
//     res.render("index", { sql: data });
// });

module.exports = router;
