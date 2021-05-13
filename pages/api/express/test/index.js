const express = require("express");
const router = express.Router();
const mySQL = require("../db/my_sql");

exports.getHome = router.get("/api/test/users", (req, res) => {
  mySQL.query("SELECT * from HJ_BLOG", (err, results) => {
    if (err) console.log(err);
    console.log(JSON.stringify(results));
    res.send(results);
  });
});


module.exports = router;