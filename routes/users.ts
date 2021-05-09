import { Router, Request, Response } from "express";
import { User } from '../moldes/user.model';
import bcrypt from 'bcrypt';
import Token from "../classes/token";
import { verificaToken } from '../middlewares/autentication';

const userRouters = Router();

// login
userRouters.post('/login', (req: Request, res: Response)=>{
     const credentials = req.body;
     User.findOne({nombre: credentials.nombre},( err: any, userDB: any) => {
        if ( err ) throw err;
        if (!userDB){
            return res.json({
                ok: false,
                mensaje: 'usuario/contraseña no validas'
            })
        } 
        if (userDB.compararPassword(credentials.password)){
            const tokenUser = Token.getJwtToken({
                _id: userDB._id,
                nombre: userDB.nombre,
                avatar: userDB.avatar
            })
            res.json({
                    ok:true,
                    token: tokenUser
            });
        }else{
            return res.json({
                ok: false,
                mensaje: 'usuario o contraseña no validos'
            })
        }
            
     });
});

// create usuario
userRouters.post('/create', (req: Request, res: Response)=>{
    const user={
        nombre: req.body.nombre ,
        password: bcrypt.hashSync(req.body.password,10),
        avatar: req.body.avatar
    };
    User.create(user).then( userDB =>{
        const tokenUser = Token.getJwtToken({
            _id: userDB._id,
            nombre: userDB.nombre,
            avatar: userDB.avatar
        })
        res.json({
                ok:true,
                token: tokenUser
        });
       
    }).catch(err => {
        res.json({
            ok: false,
            err
        });
    });
});

// actualizar usuario
userRouters.post('/update', verificaToken, (req: any, res: Response)=>{

    const userDta ={
        nombre: req.body.nombre || req.user.nombre,
        avatar: req.body.avatar || req.user.avatar
    }
    User.findByIdAndUpdate( req.user._id, userDta, { new: true}, (err: any, userDB: any)=>{
        if(err) throw err;

        if(!userDB){
            return res.json({
                ok: false,
                mensaje: 'usuario no existe'
            });
        }
        const tokenUser = Token.getJwtToken({
            _id: userDB._id,
            nombre: userDB.nombre,
            avatar: userDB.avatar
        });
    });
});

export default userRouters;