'use strict';
var crypto = require('crypto');

function btnSignUpClicked(Password) {
    
    var genRandom = function(length) {
        return crypto.randomBytes(Math.ceil(length/2))
        .toString('hex').slice(0,length);
    }

    var sha = function(Password, salt) {
        var hash = crypto.createHmac('sha512', salt);
        hash.update(Password);
        var value = hash.digest('hex');
        
        return {
            salt : salt,
            passwordHash : value
        };
    };

    function saltHashPwd (Password) {
        var salt = genRandom(16);
        var pwdData = sha512(Password, salt);

        console.log("User Password" + Password);
        console.log("Pwd Hash" + pwdData.passwordHash);
        console.log("salt" + pwdData.salt);
    }

    // var salt = bcrypt.genSaltSync(10);
    // var hash = bcrypt.hashSync(Password, salt);

    //console.log("Hashed password:" + hash)

    // bcrypt.hash(Password, rounds, (err, hash) => {
    //     if (err) {
    //         console.error(err);
    //         return;
    //     } else {
    //         console.log("This is the hash!!!" + hash)
    //     }
    // })
    
    
}

const signUp = document.querySelector('#signUp');
    signUp.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = signUp['Email'].value;
        const pwd = signUp['Password'.value];

        console.log(email, password)

    })