import jwt from "jsonwebtoken";

export default class Token{
    private static seed: string = 'seed-a11-g19-fe18-j23';
    private static caducidad: string = '30d';

    constructor(){}

    static getJwtToken(payload:any):string{
        return jwt.sign({
            user: payload
        }, this.seed, {expiresIn: this.caducidad});
    }
    static comprobarToken(userToken: string ){
        return new Promise(( resolve, reject)=>{
            jwt.verify(userToken, this.seed, (err,decoded)=>{
                if(err){
                    reject();
                }else{
                    resolve( decoded);
                }
            });
        });
        
    }
}