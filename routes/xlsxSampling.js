"use strict";

var express = require('express');
var router = express.Router();

/* GET users listing. */
//router.get("/", samplingController.samplingData.allData)
router.get('/', function(req, res, next) {

  // Return the HTML content with the appropriate content-type header
  res.set('Content-Type', 'text/html');
  res.send(`
    <html>
      <head>
        <title>XLSX Info</title>
        <style>
        html{
          background: red;
          color: black;
        }
        </style>
      </head>
      <body>
      <h2> here will be data from db/xlsx file</h2>
      <p> testing res </p>
      </body>
    </html>
  `);

});

module.exports = router;
