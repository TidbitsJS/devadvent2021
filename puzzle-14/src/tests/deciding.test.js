import { selectWinner } from '../utils/deciding.js'

test('Fire should win over snow', () => {
    const user1 = { name: 'Santa', choice: 'fire' }
    const user2 = { name: 'Head Elf', choice: 'snow' }
    const winner = selectWinner(user1, user2)
    expect(winner.name).toBe('Santa')
})

test('Fire should win over snow', () => {
    const user1 = { name: 'Santa', choice: 'snow' }
    const user2 = { name: 'Head Elf', choice: 'earth' }
    const winner = selectWinner(user1, user2)
    expect(winner.name).toBe('Santa')
})

test('Fire should win over snow', () => {
    const user1 = { name: 'Santa', choice: 'earth' }
    const user2 = { name: 'Head Elf', choice: 'fire' }
    const winner = selectWinner(user1, user2)
    expect(winner.name).toBe('Santa')
})

test('Equal choices should give no winner (null)', () => {
    const user1 = { name: 'Santa', choice: 'snow' }
    const user2 = { name: 'Head Elf', choice: 'snow' }
    const winner = selectWinner(user1, user2)
    expect(winner).toBe(null)
})
