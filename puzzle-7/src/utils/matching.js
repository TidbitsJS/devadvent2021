import names from '../data/names.js';

export const matchedNames = smudgedName => {
    // if there are no #s, return the original name
    if (smudgedName.indexOf('#') === -1) {
        return [smudgedName];
    }

    // split the name into an array of words
    const nameArray = smudgedName.split('#');

    // counter check with the names array to see if the name is in there
    const matchedNames = names.filter(name => {
        // if the name length is equal to the smudged name length, check if the name is in the smudged name
        if(name.length === smudgedName.length) {
            return nameArray.every(namePart => name.includes(namePart) && name.length === smudgedName.length);
        }    
    })

    // if there are no matches, return the an empty array
    if (matchedNames.length === 0) {
        return [];
    }

    return matchedNames;
}
