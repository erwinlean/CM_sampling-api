"use strict";

module.exports = {
    index: async function (req, res, next) {
        try {
            res.status(417).json({ message: "Page not found, the correct path for this api are: undefined yet. Please check doc at: https://github.com/erwinlean/CM_show-api" });
        } catch (err) {
            res.status(500).json({ message: "Internal Server Error" });
        };
    }
};