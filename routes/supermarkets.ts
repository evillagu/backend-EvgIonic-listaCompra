import { Router, Request, Response } from "express";
import { verificaToken } from '../middlewares/autentication';
import { Supermarket } from "../moldes/supermarkets.model";

const supermarketsRouters = Router();

supermarketsRouters.post('/', [verificaToken], (req: any , res: Response)=>{
   const body = req.body;
   Supermarket.create(body).then( superBD =>{
   res.json({
      ok:true,
      superBD
      });
   }).catch(err=>{
      res.json(err);
   });
});

export default supermarketsRouters;