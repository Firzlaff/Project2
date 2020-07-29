const express = require("express");
const router = express.Router();
const sql = require("../db/sql");
var db = require("../models");
const { sequelize } = require("../models");


// Get Route to pull data from the DB 
router.get("/", function (req, res) {
    let todoData;
    console.log("get")
    db.Note.findAll({raw: true}).then(function (notes) {
        todoData = notes;
        let allWorkouts;
        db.Workout.findAll({raw: true}).then(function (workouts) {
            allWorkouts = workouts;
            let oneTip;
            db.Tip.findOne({raw: true, order: sequelize.random()}).then(function (tip) {
                oneTip = [tip];
                console.log(tip)
                res.render("index", { todo: todoData, workout: allWorkouts, tip: oneTip });
            });
        });
    });



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
