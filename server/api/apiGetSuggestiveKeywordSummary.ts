import {Request, Response} from 'express';
import * as _ from 'lodash';
import {onError} from "./onError";
import {onSuccess} from "./onSuccess";
import {findSuggestiveKeyword} from "../queries/findSuggestiveKeyword";

export function apiGetSuggestiveKeywordSummary(req: Request, res: Response) {

    /*console.log("query: " + req.query.q);*/

    const q = req.query.q || '';
    const countryCode = req.query.Country || 'SG';

    findSuggestiveKeyword(q,countryCode)
        .then(_.partial(onSuccess, res))
        .catch(_.partial(onError, res, "Find Suggestive Keyword Failed. "));
}