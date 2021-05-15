import {Schema, model, Document} from 'mongoose';

const listShema = new Schema({
    genero:{
        type: String
    },
    icon:{
        type: String
    },
    items: {
        type: Schema.Types.ObjectId,
        ref: 'ItemProduc',
        required:[
            true, 'El nombre es necesario'
        ]
    }
});
interface Iitemproduct extends Document{
    genero: string;
    icon:string;
    // items: ItemProducts[];
}