"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const mongoose_1 = require("mongoose");
const itemShema = new mongoose_1.Schema({
    nombre: {
        type: String,
        unique: true,
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
    }
    // usuario:{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Usuario'
    // }
});
const Item = mongoose_1.model('Item', itemShema);
exports.Item = Item;
