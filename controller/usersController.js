"use strict";

const userModel = require("../models/userModel");

module.exports = {
    nothingYet: async function(req, res, next) {
        res.send('respond with a resource in USERS');
    }
};