"use strict";
var _ = require("lodash");
var onError_1 = require("./onError");
var onSuccess_1 = require("./onSuccess");
var findSuggestiveKeyword_1 = require("../queries/findSuggestiveKeyword");
function apiGetSuggestiveKeywordSummary(req, res) {
    /*console.log("query: " + req.query.q);*/
    var q = req.query.q || '';
    var countryCode = req.query.Country || 'SG';
    findSuggestiveKeyword_1.findSuggestiveKeyword(q, countryCode)
        .then(_.partial(onSuccess_1.onSuccess, res))
        .catch(_.partial(onError_1.onError, res, "Find Suggestive Keyword Failed. "));
}
exports.apiGetSuggestiveKeywordSummary = apiGetSuggestiveKeywordSummary;
