const { slugify } = require('../utils/helpers')
const testCases = require('./slugifyTests')

testCases.forEach(({ input, output }) => {
    test(`'${input}' slugified should be '${output}'`, () => {
        expect(slugify(input)).toBe(output)
    })
})
