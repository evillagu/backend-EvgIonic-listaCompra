"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemProduc = void 0;
const mongoose_1 = require("mongoose");
const itemProducShema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: [
            true, 'El nombre es necesario'
        ]
    },
    precio: {
        type: Number
    },
    marca: {
        type: String
    },
    descripcion: {
        type: String
    },
});
exports.ItemProduc = mongoose_1.model('ItemProduc');
