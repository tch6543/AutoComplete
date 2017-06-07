import {AutoCompleteModel} from '../model/model';
import {GetKeywords, SuggestiveModel} from "../dto/dtoAutoCompleteResponse";
import * as Bluebird from "bluebird";

export function findSuggestiveKeyword(q: string, countryCode: string) :Bluebird<SuggestiveModel[]>{
    return AutoCompleteModel.findAndCount({
        where: {
            title: {
                $like: `%${q}%`
            },
            Country: countryCode,
            Status: true
        }
    }).then(result => GetKeywords(result.rows))
}