import { selectBox } from './utils/select.js'
import { sizeAsString } from './utils/helpers.js'
import chalk from 'chalk'
const items = [
    { width: 2, length: 5, height: 4 },
    { width: 10, length: 4, height: 10 },
    { width: 3, length: 3, height: 80 },
    { width: 2, length: 10, height: 70 },
    { width: 25, length: 40, height: 15 },
    { width: 25, length: 40, height: 20 },
    { width: 79, length: 20, height: 50 },
    { width: 10, length: 10, height: 4 },
    { width: 20, length: 20, height: 10 },
    { width: 30, length: 20, height: 10 },
    { width: 20, length: 50, height: 10 },
]

items.forEach(item => {
    try {
        const box = selectBox(item)
        if (!box) throw Error('NEEDS_EXTRAORDINARY_SHIPPING')
        console.log(
            `Item ${chalk.yellow(sizeAsString(item))} fits in`,
            chalk.green(box.name),
            chalk.gray(`(${sizeAsString(box)})`),
        )
    } catch (error) {
        if (error.message === 'NEEDS_EXTRAORDINARY_SHIPPING') {
            console.log(
                chalk.red(
                    `Item ${sizeAsString(
                        item,
                    )} does not fit in any standard box`,
                ),
            )
        } else {
            console.log(chalk.red(error.message))
        }
    }
})
