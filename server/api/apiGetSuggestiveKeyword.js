"use strict";
var model_1 = require("../model/model");
var _ = require("lodash");
var onError_1 = require("./onError");
function apiGetSuggestiveKeyword(req, res) {
    /*console.log("query: " + req.query.q);*/
    var q = req.query.q || '';
    var countryCode = req.query.Country || 'MYS';
    var maxResults = req.query.maxResults || 10;
    if (maxResults == 0) {
        maxResults = 10;
    }
    model_1.AutoCompleteModel.findAndCount({
        where: {
            title: {
                $like: "%" + q + "%"
            },
            Country: countryCode,
            Status: true
        },
        limit: maxResults
    })
        .then(function (result) {
        if (result.count > 0) {
            res.status(200).json({ "totalRecord": result.count, "data": result.rows });
        }
        else {
            res.status(200).json({ "status": 200, "message": "No record found at this moment." });
        }
    })
        .catch(_.partial(onError_1.onError, res, "Find Suggestive Keyword Failed. "));
}
exports.apiGetSuggestiveKeyword = apiGetSuggestiveKeyword;
/*res.status(200).json({"massage": 'Hellow'});*/
/* AutoCompleteModel.findAll({
 where: {
 title: {
 $like: `%${q}%`
 },
 Country: countryCode
 }
 })
 .then(_.partial(onSuccess, res))
 .catch(_.partial(onError, res, "Find Suggestive Keyword Failed. "));*/ 
