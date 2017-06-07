import {NextFunction, Request, Response, ErrorRequestHandler} from "express";
const hri = require('human-readable-ids').hri;

export function apiErrorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    const errId = hri.random();

    console.error(`Error on AutoComplete API (${errId}): `, err);

    res.status(500).json({errorCode: '500', massage: 'Internal Server Error on API'});
}