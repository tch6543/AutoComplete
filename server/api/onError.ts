import {Request, Response} from 'express';

const hri = require('human-readable-ids').hri;

export function onError(res: Response, message: string, err: any) {
    const errId = hri.random();
    console.error(`Promise Chain Error (${errId}): `, message, err);
    res.status(500).send();
}