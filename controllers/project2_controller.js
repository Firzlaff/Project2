const express = require("express");
const router = express.Router();
const project2 = require("../models/project2");

router.get("/", async function (req, res) {
    let data;
    await project2.selectAll().then(function (res) {
        data = res;
    });
    res.render("index", { project2: data });
});

module.exports = router;