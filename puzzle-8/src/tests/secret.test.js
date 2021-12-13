import { assignNames } from '../utils/secret.js'

const rounds = 10

const array1 = ['a', 'b']
for (let index = 0; index < rounds; index++) {
    const count = `${index + 1} / ${rounds})`
    test(`An array of two should result in having each other as secret santa (${count})`, () => {
        const list = assignNames(array1)
        const a = list.find(({ name }) => name === 'a')
        const b = list.find(({ name }) => name === 'b')
        console.log({ a, b })
        expect(a.secretSanta).toBe('b')
        expect(b.secretSanta).toBe('a')
    })
}

const array2 = ['a', 'b', 'c']
for (let index = 0; index < rounds; index++) {
    const count = `${index + 1} / ${rounds})`
    test(`There should be no duplicate secret santas (${count})`, () => {
        const list = assignNames(array2)
        const secretSantas = list.map(({ secretSanta }) => secretSanta)
        expect(secretSantas.length).toBe(new Set(secretSantas).size)
    })
}

const array3 = ['a', 'b', 'c', 'd', 'e', 'f']
for (let index = 0; index < rounds; index++) {
    const count = `${index + 1} / ${rounds})`
    test(`Everyone should have a secret santa (${count})`, () => {
        const list = assignNames(array3)
        const everyoneHasASecretSanta = list.every(({ secretSanta }) =>
            Boolean(secretSanta),
        )
        expect(everyoneHasASecretSanta).toBe(true)
    })
}

const array4 = ['a', 'b', 'c', 'c']
test(`Everyone should have a secret santa`, () => {
    expect(() => assignNames(array4)).toThrow(Error('DUPLICATE_NAMES'))
})

const array5 = ['a', 'b', 'c', 'd']
test(`The result should not be empty`, () => {
    const list = assignNames(array5)

    expect(list.length).toBeGreaterThan(0)
})
