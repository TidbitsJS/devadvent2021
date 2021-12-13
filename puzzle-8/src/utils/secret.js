export const hasDuplicates = arr => {
    return new Set(arr).size !== arr.length
}

export const assignNames = names => {
    // Return an array of objects with name and secretSanta.
    // Example:
    // [
    //     { name: 'Jimmy', secretSanta: 'Johnny' },
    //     { name: 'Johnny', secretSanta: 'Sandra' },
    //     { name: 'Sandra', secretSanta: 'Jimmy' },
    // ]

    // Rules:
    // - There should be a secret santa for everyone
    // - The secret santa should not be the same as the name
    // - When there are duplicate names, throw an Error('DUPLICATE_NAMES')

    const namesArrayLength = names.length

    // check if there are less than 2 names
    if (namesArrayLength < 2) {
        throw new Error('TOO_FEW_NAMES')
    }

    // check if there are duplicate names
    if (hasDuplicates(names)) {
        throw new Error('DUPLICATE_NAMES')
    }

    const secretSantaArray = []
    
    // create a secret santa array
    for (let i = 0; i < namesArrayLength; i++) {
        const name = names[i]
        const secretSanta = names[(i + 1) % namesArrayLength]

        secretSantaArray.push({ name, secretSanta })
    }

    return secretSantaArray
}
