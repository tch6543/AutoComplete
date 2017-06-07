"use strict";
var hri = require('human-readable-ids').hri;
function onError(res, message, err) {
    var errId = hri.random();
    console.error("Promise Chain Error (" + errId + "): ", message, err);
    res.status(500).send();
}
exports.onError = onError;
