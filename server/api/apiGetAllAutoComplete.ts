import {Request, Response} from 'express';
import {AutoCompleteModel} from "../model/model";
import * as _ from 'lodash';
import {onError} from "./onError";
import {onSuccess} from "./onSuccess";
import * as NodeCache from 'node-cache';
import {getInstance} from "../cache-provider";

/*const autoCompleteCache = new NodeCache({
    stdTTL:100,
    checkperiod: 600
});*/

const autoCompleteCache = getInstance();

export function apiGetAllAutoComplte(req: Request, res: Response) {

   /* AutoCompleteModel.findAll()
        .then(_.partial(setCache), _.partial(onSuccess, res))
        .catch(_.partial(onError, res, "Find All AutoComplete Failed. "));*/

    const result = autoCompleteCache.get('all-autocomplete-detail');

    if (result) {
        onSuccess(res, result);
    } else {
        /*res.status(200).json({"massage": 'Hellow'});*/
        AutoCompleteModel.findAll()
            .then(_.partial(setCache), _.partial(onSuccess, res))
            .catch(_.partial(onError, res, "Find All AutoComplete Failed. "));

    }
}

function setCache(data:any){
    autoCompleteCache.set('all-autocomplete-detail', data);
}