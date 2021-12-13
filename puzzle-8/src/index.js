import { assignNames } from './utils/secret.js'
import elves from './data/elves.js'
const secretSantaList = assignNames(elves)

console.log('List of secret santas 🤫🎅')
console.table(secretSantaList)
