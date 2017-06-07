"use strict";
var model_1 = require("../model/model");
var dtoAutoCompleteResponse_1 = require("../dto/dtoAutoCompleteResponse");
function findSuggestiveKeyword(q, countryCode) {
    return model_1.AutoCompleteModel.findAndCount({
        where: {
            title: {
                $like: "%" + q + "%"
            },
            Country: countryCode,
            Status: true
        }
    }).then(function (result) { return dtoAutoCompleteResponse_1.GetKeywords(result.rows); });
}
exports.findSuggestiveKeyword = findSuggestiveKeyword;
