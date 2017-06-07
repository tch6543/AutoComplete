"use strict";
var model_1 = require("../model/model");
var _ = require("lodash");
var onError_1 = require("./onError");
var onSuccess_1 = require("./onSuccess");
var validator = require("validator");
function apiGetAutoComplteDetail(req, res) {
    /*console.log("query: " + req.query.q);*/
    /*const autoCompleteId = req.params.id;*/
    var autoCompleteId = req.params.placeid;
    /*res.status(200).json({"massage": 'Hellow'});*/
    if (autoCompleteId) {
        if (validator.isUUID(autoCompleteId)) {
            model_1.AutoCompleteModel.findOne({
                where: { id: autoCompleteId }
            })
                .then(_.partial(onSuccess_1.onSuccess, res))
                .catch(_.partial(onError_1.onError, res, "Find AutoComplete Detail Failed. "));
        }
        else {
            res.status(400).json({ errorCode: '400', massage: 'Invalid PlaceId. ' });
        }
    }
    else {
        res.status(400).json({ errorCode: '400', massage: 'PlaceId is required.' });
    }
}
exports.apiGetAutoComplteDetail = apiGetAutoComplteDetail;
