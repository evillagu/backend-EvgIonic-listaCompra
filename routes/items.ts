import { Router, Request, Response } from "express";
import { verificaToken } from '../middlewares/autentication';
import { Item } from "../moldes/item.model";


const itemRouters = Router();

itemRouters.post('/', [verificaToken], (req: any , res: Response)=>{
   
   const body = req.body;
   Item.create(body).then(itemDB =>{
      res.json({
         ok:true,
         itemDB
      });
   }).catch(err=>{
      res.json(err);
   }); 
});

export default itemRouters;