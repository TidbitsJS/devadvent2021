const findRudolf = forest => {
    // Return the index of the correct column and row, where Rudolf the reindeer is to be found.
    // When not found, return -1 for both values.

    // get the correct row
    const rudolf = forest.find(row => row.includes('🦌'));
    
    // if the correct row is found, get the correct index
    if (rudolf) {
        return {col: rudolf.indexOf('🦌'), row: forest.indexOf(rudolf)};
    }

    // if the correct column is not found, return -1 for both values
    return {col: -1, row: -1};
}

module.exports = { findRudolf }

