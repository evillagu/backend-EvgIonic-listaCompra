import {Response, Request, NextFunction } from 'express';
import Token from '../classes/token';

export const verificaToken =(req : any, res: Response, next: NextFunction) =>{
    const userToken = req.get('x-token') || '';
    Token.comprobarToken( userToken)
    .then( (decoded: any) =>{
        console.log('decoded', decoded);
        req.user = decoded.user;
        next();
    })
    .catch(err => {
        res.json({
            ok:false,
            mensaje: 'token no correcto'
        });
    });
}