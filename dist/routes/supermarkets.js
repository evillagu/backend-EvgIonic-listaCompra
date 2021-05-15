"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const autentication_1 = require("../middlewares/autentication");
const supermarkets_model_1 = require("../moldes/supermarkets.model");
const supermarketsRouters = express_1.Router();
supermarketsRouters.post('/', [autentication_1.verificaToken], (req, res) => {
    const body = req.body;
    supermarkets_model_1.Supermarket.create(body).then(superBD => {
        res.json({
            ok: true,
            superBD
        });
    }).catch(err => {
        res.json(err);
    });
});
exports.default = supermarketsRouters;
