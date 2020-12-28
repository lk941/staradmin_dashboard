import * as bcrypt from 'bcryptjs';
// import Auth from './../../'

export default class Auth {
    public static hashPwd (password: string, rounds: number, callback: (error: Error, hash: string) => void) : void {
        bcrypt.hash(password, rounds, (error, hash) => {
            callback(error, hash);
        })
    }

    public myFunc() {
        Auth.hashPwd('uwu', 12,(err,hash) =>{
            if (err) {
                throw new Error('There was an error,' + err);
            } else {
                //store hash
            }
        } );
    }
}

