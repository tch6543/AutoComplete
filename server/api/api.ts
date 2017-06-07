import {Application} from "express";
import {apiGetAllAutoComplte} from "./apiGetAllAutoComplete";
import {apiGetAutoComplteDetail} from "./apiGetAutoCompleteDetail";
import {apiGetSuggestiveKeyword} from "./apiGetSuggestiveKeyword";
import {apiGetSuggestiveKeywordSummary} from "./apiGetSuggestiveKeywordSummary";

export function initRestApi(app: Application) {
    app.route('/api/all/autocomplete').get(apiGetAllAutoComplte);

    /*app.route('/api/autocomplete/:id').get(apiGetAutoComplteDetail);*/
    app.route('/api/detail/:placeid').get(apiGetAutoComplteDetail);

    app.route('/api/autocomplete').get(apiGetSuggestiveKeyword);

    app.route('/api/suggestion/summary').get(apiGetSuggestiveKeywordSummary);
}