import { Router, Request, Response } from "express";
import { verificaToken } from '../middlewares/autentication';
import { Product } from '../moldes/product.model';

const productRouters = Router();

productRouters.post('/', [verificaToken], (req: any , res: Response)=>{

   const body = req.body;
   Product.create(body).then(productBD =>{
      res.json({
         ok:true,
         productBD
      });
   }).catch(err=>{
      res.json(err);
   });
});



export default productRouters;