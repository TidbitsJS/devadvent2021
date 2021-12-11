import chalk from 'chalk'
import {
    findOutIfNaughtyOrNice,
    getKids,
    getNiceKids,
    getNaughtyKids,
} from './utils/naughtyOrNice.js'

const kids = getKids()

kids.forEach(kid => {
    const naughtyOrNice = findOutIfNaughtyOrNice(kid)
    const color = naughtyOrNice === 'nice' ? chalk.green : chalk.red
    const emoji = naughtyOrNice === 'nice' ? '😇' : '😈'
    console.log(color(`${kid.name} was ${naughtyOrNice} ${emoji}`))
})

// Print list of nice kids
const niceKids = getNiceKids(kids)
console.log(`${niceKids.length} nice kids 😇:`)
niceKids.forEach(kid => console.log(` > ${kid.name}`))

// Print list of naughty kids
const naughtyKids = getNaughtyKids(kids)
console.log(`${naughtyKids.length} naughty kids 😈:`)
naughtyKids.forEach(kid => console.log(` > ${kid.name}`))
