import {Request, Response} from 'express';
export function onSuccess(res: Response, data: any) {
    if(data){
        res.status(200).json({payload: data});
    }else{
        res.status(200).json({"status": 200, "message": `No record found at this moment.`});
    }

}