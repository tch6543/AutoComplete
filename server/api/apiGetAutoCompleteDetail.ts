import {Request, Response} from 'express';
import {AutoCompleteModel} from "../model/model";
import * as _ from 'lodash';
import {onError} from "./onError";
import {onSuccess} from "./onSuccess";
import * as validator from 'validator';

export function apiGetAutoComplteDetail(req: Request, res: Response) {

    /*console.log("query: " + req.query.q);*/
    /*const autoCompleteId = req.params.id;*/
    const autoCompleteId = req.params.placeid;

    /*res.status(200).json({"massage": 'Hellow'});*/
    if (autoCompleteId) {
        if (validator.isUUID(autoCompleteId)) {
            AutoCompleteModel.findOne({
                where: {id: autoCompleteId}
            })
                .then(_.partial(onSuccess, res))
                .catch(_.partial(onError, res, "Find AutoComplete Detail Failed. "));
        } else {
            res.status(400).json({errorCode: '400', massage: 'Invalid PlaceId. '});
        }
    } else {
        res.status(400).json({errorCode: '400', massage: 'PlaceId is required.'});
    }
}