import Serve from "./classes/server";
import userRouters from "./routes/users";
import mongoose from "mongoose"
import bodyParser from "body-parser";
import itemRouters from './routes/items';
import productRouters from "./routes/product";
import supermarketsRouters from "./routes/supermarkets";


const server = new Serve();

// body parser
server.app.use( bodyParser.urlencoded({ extended: true}));
server.app.use(bodyParser.json());


// rutas de las aplicaciones
server.app.use('/user', userRouters);
server.app.use('/item', itemRouters);
server.app.use('/product', productRouters);
server.app.use('/super', supermarketsRouters);

// conectar DB
mongoose.connect('mongodb://localhost:27017/backendEvg-listaCompra', 
                {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false}, 
                (err)=>{
                    if(err) throw err;
                    console.log('base datos ok')
                })

// levantar express
server.start(()=>{
    console.log(`servidor corriendo en el puerto ${server.port}`);
    
});

