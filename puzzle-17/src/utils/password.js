// import crypto module
import crypto from 'crypto';

export const bruteForcePassword = hash => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const password = [];

    // generate all possible passwords in format: <UPPER CASE LETTER>-<3-DIGIT-NUMBER> 
    for (let i = 0; i < alphabet.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            for (let k = 0; k < numbers.length; k++) {
                for (let l = 0; l < numbers.length; l++) {
                    password.push(alphabet[i] + "-" + numbers[j] + numbers[k] + numbers[l]);
                }
            }
        }
    }

    // generate SHA-1 hash for each password in the array and compare it with the given hash
    for (let i = 0; i < password.length; i++) {
        // create SHA-1 hash
        const generatedHash = crypto.createHash('sha1').update(password[i]).digest('hex')
        if ( generatedHash === hash) {
            return password[i];
        }
    }

    return null;
}
