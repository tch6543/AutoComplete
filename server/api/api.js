"use strict";
var apiGetAllAutoComplete_1 = require("./apiGetAllAutoComplete");
var apiGetAutoCompleteDetail_1 = require("./apiGetAutoCompleteDetail");
var apiGetSuggestiveKeyword_1 = require("./apiGetSuggestiveKeyword");
var apiGetSuggestiveKeywordSummary_1 = require("./apiGetSuggestiveKeywordSummary");
function initRestApi(app) {
    app.route('/api/all/autocomplete').get(apiGetAllAutoComplete_1.apiGetAllAutoComplte);
    /*app.route('/api/autocomplete/:id').get(apiGetAutoComplteDetail);*/
    app.route('/api/detail/:placeid').get(apiGetAutoCompleteDetail_1.apiGetAutoComplteDetail);
    app.route('/api/autocomplete').get(apiGetSuggestiveKeyword_1.apiGetSuggestiveKeyword);
    app.route('/api/suggestion/summary').get(apiGetSuggestiveKeywordSummary_1.apiGetSuggestiveKeywordSummary);
}
exports.initRestApi = initRestApi;
