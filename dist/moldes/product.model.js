"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const ProductShemaFields = {
    genero: {
        type: String,
        required: [
            true, 'El nombre es necesario'
        ]
    },
    icon: {
        type: String
    },
    items: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Item'
        }]
};
const ProductSchema = new mongoose_1.Schema(ProductShemaFields);
const Product = mongoose_1.model('Product', ProductSchema);
exports.Product = Product;
