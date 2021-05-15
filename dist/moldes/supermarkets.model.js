"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Supermarket = void 0;
const mongoose_1 = require("mongoose");
const SupermarketShemaFields = {
    sitio: {
        type: String,
        required: [
            true, 'El nombre es necesario'
        ]
    },
    icon: {
        type: String
    },
    product: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Item'
        }]
};
const supermarketShema = new mongoose_1.Schema(SupermarketShemaFields);
const Supermarket = mongoose_1.model('Isupermarket', supermarketShema);
exports.Supermarket = Supermarket;
