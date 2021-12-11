import gifts from './data/gifts.js'
import { printPossibleResults } from './utils/helpers.js'
import { matchedNames } from './utils/matching.js'

// Fixing the list of gifts 🎁
gifts.forEach(({ giftName, for: smudgedName }) => {
    const possibleNames = matchedNames(smudgedName)
    printPossibleResults({ possibleNames, giftName, smudgedName })
})
