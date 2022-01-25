import { selectWinner } from './utils/deciding.js'
import elves from './utils/elves.js'

const choices = ['earth', 'fire', 'snow']

const random = arr => arr[Math.floor(Math.random() * arr.length)]

for (let i = 0; i < 10; i++) {
    const user1 = { name: random(elves), choice: random(choices) }
    const user2 = { name: random(elves), choice: random(choices) }

    const winner = selectWinner(user1, user2)
    console.log(`${user1.name} 🤜 🤛 ${user2.name}`)
    if (winner) console.log(`${winner.name.toUpperCase()} wins!`)
    else console.log(`It's a draw!`)
    console.log()
}
