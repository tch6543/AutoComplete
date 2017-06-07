"use strict";
function onSuccess(res, data) {
    if (data) {
        res.status(200).json({ payload: data });
    }
    else {
        res.status(200).json({ "status": 200, "message": "No record found at this moment." });
    }
}
exports.onSuccess = onSuccess;
