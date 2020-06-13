const express = require("express");
const router = express.Router();
const sql = require("../models/sql");

// changed the name of the route to /test as the / was pulling the index auto, Once we add the index in we can go back to the / or we can rename the index if it is staying.
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
});

router.put("/api/complete", (req, res) => {
    sql.completeTodo(req.body.id);
    res.sendStatus(200).end();
});

router.delete("/api/delete", (req, res) => {
    sql.deleteTodo(req.body.id);
    res.sendStatus(200).end();
});

//Routes for the Weekly workouts
router.get("/workouts", async function (req, res) {
    console.log("route here");
    let data;
    await sql.selectAllWorkouts().then(function (res) {
        data = res;
    });
    console.log(data);
    res.render("index", { project2: data });
});



module.exports = router;