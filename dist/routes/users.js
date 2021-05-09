"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_model_1 = require("../moldes/user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const token_1 = __importDefault(require("../classes/token"));
const autentication_1 = require("../middlewares/autentication");
const userRouters = express_1.Router();
// login
userRouters.post('/login', (req, res) => {
    const credentials = req.body;
    user_model_1.User.findOne({ nombre: credentials.nombre }, (err, userDB) => {
        if (err)
            throw err;
        if (!userDB) {
            return res.json({
                ok: false,
                mensaje: 'usuario/contraseña no validas'
            });
        }
        if (userDB.compararPassword(credentials.password)) {
            const tokenUser = token_1.default.getJwtToken({
                _id: userDB._id,
                nombre: userDB.nombre,
                avatar: userDB.avatar
            });
            res.json({
                ok: true,
                token: tokenUser
            });
        }
        else {
            return res.json({
                ok: false,
                mensaje: 'usuario o contraseña no validos'
            });
        }
    });
});
// create usuario
userRouters.post('/create', (req, res) => {
    const user = {
        nombre: req.body.nombre,
        password: bcrypt_1.default.hashSync(req.body.password, 10),
        avatar: req.body.avatar
    };
    user_model_1.User.create(user).then(userDB => {
        const tokenUser = token_1.default.getJwtToken({
            _id: userDB._id,
            nombre: userDB.nombre,
            avatar: userDB.avatar
        });
        res.json({
            ok: true,
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
userRouters.post('/update', autentication_1.verificaToken, (req, res) => {
    const userDta = {
        nombre: req.body.nombre || req.user.nombre,
        avatar: req.body.avatar || req.user.avatar
    };
    user_model_1.User.findByIdAndUpdate(req.user._id, userDta, { new: true }, (err, userDB) => {
        if (err)
            throw err;
        if (!userDB) {
            return res.json({
                ok: false,
                mensaje: 'usuario no existe'
            });
        }
        const tokenUser = token_1.default.getJwtToken({
            _id: userDB._id,
            nombre: userDB.nombre,
            avatar: userDB.avatar
        });
    });
});
exports.default = userRouters;
