"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const autentication_1 = require("../middlewares/autentication");
const item_model_1 = require("../moldes/item.model");
const itemRouters = express_1.Router();
itemRouters.post('/', [autentication_1.verificaToken], (req, res) => {
    const body = req.body;
    item_model_1.Item.create(body).then(itemDB => {
        res.json({
            ok: true,
            itemDB
        });
    }).catch(err => {
        res.json(err);
    });
});
exports.default = itemRouters;
