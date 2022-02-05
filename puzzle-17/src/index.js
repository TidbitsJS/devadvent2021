import { bruteForcePassword } from './utils/password.js'

const hash = '070ccd1dc4f6b82b1efe79bec3fe320447289f00'
const password = bruteForcePassword(hash)

if (password) console.log('Password is:', password)
else console.log('No password found')
