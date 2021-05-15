import {Schema, model, Document} from 'mongoose';
import bcrypt from 'bcrypt';

const itemShema = new Schema({

    nombre:{
        type: String,
        unique: true,
        required:[
            true, 'El nombre es necesario'
        ]
    },
    precio:{
        type: Number
    },
    marca:{
        type: String
    },
    descripcion:{
        type: String
    }
    // usuario:{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Usuario'
    // }

});


interface Iitem extends Document{
    
    nombre: string;
    precio: number;
    marca:string;
    descripcion: string;
    // usuario: string
}

const Item = model<Iitem>('Item', itemShema );
export {Item, Iitem}
