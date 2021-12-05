const { drinks, flavors } = require('./data/drinks')
const { createMenu } = require('./utils/menu')

const menu = createMenu(drinks, flavors)
console.log('Welcome to the Elf Coffee Shop 🧝🥤')
console.table(menu)
