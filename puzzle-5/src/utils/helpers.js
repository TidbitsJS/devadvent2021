export const findDuplicates = arr => {
    return arr.filter((item, index) => arr.indexOf(item) !== index)
}
