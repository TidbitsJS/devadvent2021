import { bruteForcePassword } from '../src/utils/password.js'

const testMap = [
    { hash: '8b066367bcbce6be1fe09450994b00c703918e23', password: 'A-000' },
    { hash: '60ebc85294f343da02c06353bc102412d018829c', password: 'D-286' },
    { hash: 'e65de41cc7e1291842c95ae5653b5c551654c935', password: 'V-000' },
    { hash: '9d92451dafbd0015defea177d4db1a33aa5d7f21', password: 'M-999' },
    { hash: '15b128b1a8c3b877ab7c5bb56b9fef4fc21ac5ff', password: 'Z-999' },
    { hash: '4fbf0b0172b005fa5d05059492c29647a85b9f17', password: 'K-924' },
    { hash: '1d6e43a8f7aaa5f83db2c7d014655dded1b5e3b6', password: 'O-777' },
]

testMap.forEach(({ hash, password }) => {
    test(`Should find password ${password}`, () => {
        expect(bruteForcePassword(hash)).toBe(password)
    })
})
