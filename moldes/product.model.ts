import {Schema, model, Document, Types} from 'mongoose';

type ID = Types.ObjectId;

interface Iproduc {
    genero: string;
    icon: number;
    items: ID[] | IproducDoc[]
}

interface IproducDoc extends Iproduc, Document {}
const ProductShemaFields : Record<keyof Iproduc, any> =  {

    genero:{
        type: String,
        required:[
            true, 'El nombre es necesario'
        ]
    },
    icon:{
        type: String
    },
    items:[{
            type: Schema.Types.ObjectId,
            ref: 'Item'
    }]
};

const ProductSchema = new Schema(ProductShemaFields);

const Product = model<IproducDoc>('Product', ProductSchema);
export {Product, Iproduc };