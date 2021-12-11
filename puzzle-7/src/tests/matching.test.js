import { matchedNames } from '../utils/matching.js'

test('Should find a unique match with first letter missing', () => {
    const names = matchedNames('#eanette')
    expect(names.length).toEqual(1)
    expect(names).toEqual(['Jeanette'])
})
test('Should find a unique match with last letter missing', () => {
    const names = matchedNames('Kirklan#')
    expect(names.length).toEqual(1)
    expect(names).toEqual(['Kirkland'])
})

test('Should find a unique match with letter missing in the middle', () => {
    const names = matchedNames('Living#ton')
    expect(names.length).toEqual(1)
    expect(names).toEqual(['Livingston'])
})

test('Should find a unique match multiple consecutive letters missing', () => {
    const names = matchedNames('Mary##len')
    expect(names.length).toEqual(1)
    expect(names).toEqual(['Maryellen'])
})
test('Should find a unique match multiple non-consecutive letters missing', () => {
    const names = matchedNames('Sc#nei#er')
    expect(names.length).toEqual(1)
    expect(names).toEqual(['Schneider'])
})
test('Should find multiple matches with one letter missing', () => {
    const names = matchedNames('Patt#')
    expect(names.length).toEqual(2)
    expect(names).toEqual(['Patti', 'Patty'])
})

test('Should find multiple matches with multiple letters missing', () => {
    const names = matchedNames('The#es#')
    expect(names.length).toEqual(2)
    expect(names).toEqual(['Theresa', 'Therese'])
})

test('Should not find a match for a name not in the database', () => {
    const names = matchedNames('N#aer###y#th')
    expect(names.length).toEqual(0)
})
