import {Request, Response} from 'express';
import {AutoCompleteModel} from "../model/model";
import * as _ from 'lodash';
import {onError} from "./onError";
import {onSuccess} from "./onSuccess";

export function apiGetSuggestiveKeyword(req: Request, res: Response) {

    /*console.log("query: " + req.query.q);*/

    let q:string = req.query.q || '';
    let countryCode:string = req.query.Country || 'MYS';
    let maxResults:number = req.query.maxResults || 10;

    if(maxResults == 0){
        maxResults = 10;
    }

    AutoCompleteModel.findAndCount({
        where: {
            title: {
                $like: `%${q}%`
            },
            Country: countryCode,
            Status: true
        },
        limit: maxResults
    })
        .then(result => {
            if (result.count > 0) {
                res.status(200).json({"totalRecord": result.count, "data": result.rows});
            } else {
                res.status(200).json({"status": 200, "message": `No record found at this moment.`});
            }
        })
        .catch(_.partial(onError, res, "Find Suggestive Keyword Failed. "));
}

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