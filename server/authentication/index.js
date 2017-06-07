"use strict";
var getApiDetail2_1 = require("./getApiDetail2");
function authenticateKey(req, res, next) {
    var requestApiKey = req.headers["x-apikey"];
    if (requestApiKey) {
        getApiDetail2_1.getApiDetail(requestApiKey)
            .then(function (result) {
            if (result == true) {
                next();
            }
            else {
                res.status(401).json({ errorCode: '401', massage: 'Invalid Valid Key.' });
            }
        });
    }
    else {
        res.status(401).json({ errorCode: '401', massage: 'Missing Valid Key.' });
    }
    /* if(getApiDetail(requestApiKey)){
     next();
     }else{
     res.status(401).json({errorCode: '401', massage: 'Missing Valida Key.'});
     }*/
}
exports.authenticateKey = authenticateKey;
