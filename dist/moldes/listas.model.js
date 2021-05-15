"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const listShema = new mongoose_1.Schema({
    genero: {
        type: String
    },
    icon: {
        type: String
    },
    items: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'ItemProduc',
        required: [
            true, 'El nombre es necesario'
        ]
    }
});
