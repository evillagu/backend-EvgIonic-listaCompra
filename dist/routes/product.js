"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const autentication_1 = require("../middlewares/autentication");
const product_model_1 = require("../moldes/product.model");
const productRouters = express_1.Router();
productRouters.post('/', [autentication_1.verificaToken], (req, res) => {
    const body = req.body;
    product_model_1.Product.create(body).then(productBD => {
        res.json({
            ok: true,
            productBD
        });
    }).catch(err => {
        res.json(err);
    });
});
exports.default = productRouters;
