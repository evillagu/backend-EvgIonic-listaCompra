"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const users_1 = __importDefault(require("./routes/users"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const server = new server_1.default();
// body parser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
// rutas de las aplicaciones
server.app.use('/user', users_1.default);
// conectar DB
mongoose_1.default.connect('mongodb://localhost:27017/backendEvg-listaCompra', { useNewUrlParser: true, useCreateIndex: true }, (err) => {
    if (err)
        throw err;
    console.log('base datos ok');
});
// levantar express
server.start(() => {
    console.log(`servidor corriendo en el puerto ${server.port}`);
});
