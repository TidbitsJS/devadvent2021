import { generatePassword } from './utils/security.js'

console.log('🔑 8 character password with lowercase, numbers:')
console.log(
    generatePassword(8, {
        lowercase: true,
        numbers: true,
    }),
)

console.log('🔑 16 character password with lowercase, uppercase, numbers:')
console.log(
    generatePassword(16, {
        lowercase: true,
        uppercase: true,
        numbers: true,
    }),
)
console.log('🔑 32 character password with uppercase, specialCharacters:')
console.log(
    generatePassword(32, {
        uppercase: true,
        specialCharacters: true,
    }),
)
console.log('🔑 64 character password with all options:')
console.log(
    generatePassword(64, {
        lowercase: true,
        numbers: true,
        uppercase: true,
        specialCharacters: true,
    }),
)
