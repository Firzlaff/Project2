const express = require("express");
const router = express.Router();
var db = require("../models");
//Using sequliize
const { sequelize } = require("../models");


// Get Route to pull data from the DB 
router.get("/", function (req, res) {
    let todoData;
    db.Note.findAll({raw: true}).then(function (notes) {
        todoData = notes;
        let allWorkouts;
        db.Workout.findAll({raw: true}).then(function (workouts) {
            allWorkouts = workouts;
            let oneTip;
            db.Tip.findOne({raw: true, order: sequelize.random()}).then(function (tip) {
                oneTip = [tip];
                res.render("index", { todo: todoData, workout: allWorkouts, tip: oneTip });
            });
        });
    });



});
// Post Route
// activity 12
router.post("/api/add", (req, res) => {
    console.log(req.body);
    db.Note.create({
      note: req.body.addTodo,
      complete: 0
    })
      .then(function(dbNote) {
        res.json(dbNote);
      });
});
// Update Route
router.put("/api/complete", (req, res) => {
    db.Note.update({complete: 1},
        {
          where: {
            id: req.body.id
          }
        })
        .then(function(dbNote) {
          res.json(dbNote);
        });
});
// Delete Route
router.delete("/api/delete", (req, res) => {
    db.Note.destroy({
        where: {
          id: req.body.id
        }
      })
        .then(function(dbNote) {
          res.json(dbNote);
        });
});

module.exports = router;
