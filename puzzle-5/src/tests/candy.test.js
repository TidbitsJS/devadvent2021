import { validate as uuidValidate } from 'uuid'
import { findDuplicates } from '../utils/helpers'
import { generateCandyBags } from '../utils/candy.js'

test('Without parameters, should return 0 bags', () => {
    const bags = generateCandyBags()
    expect(bags.length).toBe(0)
})

test('Without second parameter, should return bags with 3 candies', () => {
    const bags = generateCandyBags(3)
    expect(bags.every(bag => bag.candies.length === 3)).toBe(true)
})

test('Should return 500 bags with 5 candies each', () => {
    const bags = generateCandyBags(500, 5)
    expect(bags.length).toBe(500)
    expect(bags.every(bag => bag.candies.length === 5)).toBe(true)
})

test('Every bag should have a valid UUID', () => {
    const bags = generateCandyBags(10)
    expect(bags.every(bag => uuidValidate(bag.id))).toBe(true)
})

test('No bag should have duplicate candy', () => {
    const bags = generateCandyBags(10)
    const hasAnyBagDuplicates = bags.every(
        bag => findDuplicates(bag.candies).length,
    )
    expect(hasAnyBagDuplicates).toBe(false)
})

test('An order of more candy per bag than available candy should throw and error', () => {
    expect(() => generateCandyBags(10, 1000)).toThrow(
        Error('TOO_MUCH_CANDY_PER_BAG'),
    )
})
