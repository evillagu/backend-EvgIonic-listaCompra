import {Schema, model, Document} from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema<Iuser>({
    nombre:{
        type: String,
        unique: true,
        required:[
            true, 'El nombre es necesario'
        ]
    },
    avatar:{
        type:String,
        default: 'av-1.png'
    },
    password:{
        type: String,
        required:[
            true, 'El nombre es necesario'
        ]
    }
});

userSchema.method('compararPassword', function(password: string = ''): boolean{
     if(bcrypt.compareSync(password, this.password)){
         return true;
     } else{
         return false;
     }
})

interface Iuser extends Document{
    nombre: string;
    password: string;
    avatar: string;

    compararPassword(pasword:string):boolean;


}

export const User = model<Iuser>('User', userSchema);