"use strict";
var hri = require('human-readable-ids').hri;
function apiErrorHandler(err, req, res, next) {
    var errId = hri.random();
    console.error("Error on AutoComplete API (" + errId + "): ", err);
    res.status(500).json({ errorCode: '500', massage: 'Internal Server Error on API' });
}
exports.apiErrorHandler = apiErrorHandler;
