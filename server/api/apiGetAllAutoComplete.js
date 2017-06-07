"use strict";
var model_1 = require("../model/model");
var _ = require("lodash");
var onError_1 = require("./onError");
var onSuccess_1 = require("./onSuccess");
var cache_provider_1 = require("../cache-provider");
/*const autoCompleteCache = new NodeCache({
    stdTTL:100,
    checkperiod: 600
});*/
var autoCompleteCache = cache_provider_1.getInstance();
function apiGetAllAutoComplte(req, res) {
    /* AutoCompleteModel.findAll()
         .then(_.partial(setCache), _.partial(onSuccess, res))
         .catch(_.partial(onError, res, "Find All AutoComplete Failed. "));*/
    var result = autoCompleteCache.get('all-autocomplete-detail');
    if (result) {
        onSuccess_1.onSuccess(res, result);
    }
    else {
        /*res.status(200).json({"massage": 'Hellow'});*/
        model_1.AutoCompleteModel.findAll()
            .then(_.partial(setCache), _.partial(onSuccess_1.onSuccess, res))
            .catch(_.partial(onError_1.onError, res, "Find All AutoComplete Failed. "));
    }
}
exports.apiGetAllAutoComplte = apiGetAllAutoComplte;
function setCache(data) {
    autoCompleteCache.set('all-autocomplete-detail', data);
}
