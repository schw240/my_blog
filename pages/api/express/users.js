const express = require('express');
const mysql = require('mysql');
const router = express.Router()
const db = require("./db/index");

router.get('/api/users', (req, res) => {
    db.connection.query('SELECT * from HJ_BLOG', (err, results) => {
      if (err) throw error;
      console.log('User info is: ', results);
      res.send(results);
    });
  });

module.exports = router
