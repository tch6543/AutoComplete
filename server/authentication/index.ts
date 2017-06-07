import {NextFunction, Request, Response} from "express";
import {getApiDetail} from "./getApiDetail2";

export function authenticateKey(req: Request, res: Response, next: NextFunction) {
    const requestApiKey = req.headers["x-apikey"];

    if (requestApiKey) {
        getApiDetail(requestApiKey)
            .then(result => {
                if (result == true) {
                    next();
                } else {
                    res.status(401).json({errorCode: '401', massage: 'Invalid Valid Key.'});
                }
            });
    } else {
        res.status(401).json({errorCode: '401', massage: 'Missing Valid Key.'});
    }


    /* if(getApiDetail(requestApiKey)){
     next();
     }else{
     res.status(401).json({errorCode: '401', massage: 'Missing Valida Key.'});
     }*/

}