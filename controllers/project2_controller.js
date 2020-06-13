const express = require("express");
const router = express.Router();
const project2 = require("../models/project2");

// changed the name of the route to /test as the / was pulling the index auto, Once we add the index in we can go back to the / or we can rename the index if it is staying.
router.get("/test", async function (req, res) {
    console.log("route here");
    let data;
    await project2.selectAllNotes().then(function (res) {
        data = res;
    });
    console.log(data);
     res.render("index", { project2: data });
});

//Routes for the Weekly workouts
router.get("/workouts", async function (req, res) {
    console.log("route here");
    let data;
    await project2.selectAllWorkouts().then(function (res) {
        data = res;
    });
    console.log(data);
     res.render("index", { project2: data });
});



module.exports = router;