import boxes from '../data/boxes.js'
import { selectBox } from '../utils/select.js'
import { sizeAsString } from '../utils/helpers.js'
const tests = [
    { input: { width: 2, length: 5, height: 4 }, output: 'micro' },
    { input: { width: 10, length: 4, height: 10 }, output: 'tiny' },
    { input: { width: 3, length: 3, height: 80 }, output: 'extreme' },
    { input: { width: 2, length: 10, height: 70 }, output: 'huge' },
    { input: { width: 25, length: 40, height: 15 }, output: 'big' },
    { input: { width: 25, length: 40, height: 20 }, output: 'huge' },
    { input: { width: 79, length: 20, height: 50 }, output: 'extreme' },
    { input: { width: 10, length: 10, height: 4 }, output: 'tiny' },
    { input: { width: 20, length: 20, height: 10 }, output: 'petit' },
    { input: { width: 30, length: 20, height: 10 }, output: 'average' },
    { input: { width: 20, length: 50, height: 10 }, output: 'huge' },
]

const findBox = slug => boxes.find(box => box.slug === slug)

tests.forEach(testItem => {
    test(`Item ${sizeAsString(testItem.input)} should fit in box '${
        findBox(testItem.output).name
    }'`, () => {
        expect(selectBox(testItem.input).slug).toBe(testItem.output)
    })
})

const oversizedItem = { width: 300, length: 200, height: 70 }
test('Oversized item should not be assigned any box', () => {
    expect(selectBox(oversizedItem)).toBe(undefined)
})
