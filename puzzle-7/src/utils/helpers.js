import chalk from 'chalk'

const formatNotFound = (giftName, smudgedName) => {
    const fSmudgedName = chalk.yellow(smudgedName)
    return `🚫 ${giftName} for ${fSmudgedName} did not have any matches`
}

const formatSingleFound = (giftName, smudgedName, possibleNames) => {
    const fSmudgedName = chalk.yellow(smudgedName)
    const fPossibleNames = chalk.green(possibleNames[0])
    return `✅ ${giftName} for ${fSmudgedName} is uniquely identified as ${fPossibleNames}`
}

const formatMultipleFound = (giftName, smudgedName, possibleNames) => {
    const fSmudgedName = chalk.yellow(smudgedName)
    const fPossibleNames = chalk.green(possibleNames.join(', '))
    return `👍 ${giftName} for ${fSmudgedName} has ${possibleNames.length} possible matches: ${fPossibleNames}`
}

export const printPossibleResults = ({
    possibleNames,
    giftName,
    smudgedName,
}) => {
    if (possibleNames.length === 0) {
        console.log(formatNotFound(giftName, smudgedName))
    } else if (possibleNames.length === 1) {
        console.log(formatSingleFound(giftName, smudgedName, possibleNames))
    } else {
        console.log(formatMultipleFound(giftName, smudgedName, possibleNames))
    }
}
