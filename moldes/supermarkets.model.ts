import {Schema, model, Document, Types} from 'mongoose';

type ID = Types.ObjectId;
interface Isupermarket {
    sitio: string;
    icon: string;
    product: ID[] | IsuperDoc[]
}
interface IsuperDoc extends Isupermarket, Document {}
const SupermarketShemaFields : Record<keyof Isupermarket, any> =  {

    sitio:{
        type: String,
        required:[
            true, 'El nombre es necesario'
        ]
    },
    icon:{
        type: String
    },
     product:[{
        type: Schema.Types.ObjectId,
        ref: 'Item'
    }]


};

const supermarketShema = new Schema(SupermarketShemaFields);
const Supermarket = model<IsuperDoc>('Isupermarket', supermarketShema);
export {Supermarket, Isupermarket}