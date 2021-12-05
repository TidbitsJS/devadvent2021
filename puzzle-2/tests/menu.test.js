const menus = require('./testMenus')
const { createMenu } = require('../utils/menu')

menus.forEach(testMenu => {
    test(testMenu.description, () => {
        const menu = createMenu(testMenu.test.drinks, testMenu.test.flavors)
        expect(menu).toStrictEqual(testMenu.result)
    })
})

test('Real menu', () => {
    const { drinks, flavors } = require('../data/drinks')
    const realMenu = createMenu(drinks, flavors)
    const realMenuResult = [
        { drink: 'Cappuccino', flavor: undefined, price: 4 },
        { drink: 'Cappuccino', flavor: 'Peppermint', price: 4.5 },
        { drink: 'Cappuccino', flavor: 'Cinnamon', price: 5 },
        { drink: 'Cappuccino', flavor: 'Chestnuts', price: 5.25 },
        { drink: 'Cappuccino', flavor: 'Ginerbread', price: 5.5 },
        { drink: 'Cappuccino', flavor: 'Pumpkin Spice', price: 5.75 },
        { drink: 'Cappuccino', flavor: 'Apple Crisp', price: 6 },
        { drink: 'Cappuccino', flavor: 'Mrs. Claus Special', price: 7 },
        { drink: 'Hot Chocolate', flavor: undefined, price: 4.5 },
        { drink: 'Hot Chocolate', flavor: 'Peppermint', price: 5 },
        { drink: 'Hot Chocolate', flavor: 'Cinnamon', price: 5.5 },
        { drink: 'Hot Chocolate', flavor: 'Chestnuts', price: 5.75 },
        { drink: 'Hot Chocolate', flavor: 'Ginerbread', price: 6 },
        { drink: 'Hot Chocolate', flavor: 'Pumpkin Spice', price: 6.25 },
        { drink: 'Hot Chocolate', flavor: 'Apple Crisp', price: 6.5 },
        { drink: 'Hot Chocolate', flavor: 'Mrs. Claus Special', price: 7.5 },
        { drink: 'Latte', flavor: undefined, price: 3 },
        { drink: 'Latte', flavor: 'Peppermint', price: 3.5 },
        { drink: 'Latte', flavor: 'Cinnamon', price: 4 },
        { drink: 'Latte', flavor: 'Chestnuts', price: 4.25 },
        { drink: 'Latte', flavor: 'Ginerbread', price: 4.5 },
        { drink: 'Latte', flavor: 'Pumpkin Spice', price: 4.75 },
        { drink: 'Latte', flavor: 'Apple Crisp', price: 5 },
        { drink: 'Latte', flavor: 'Mrs. Claus Special', price: 6 },
        { drink: 'Macchiato', flavor: undefined, price: 3.5 },
        { drink: 'Macchiato', flavor: 'Peppermint', price: 4 },
        { drink: 'Macchiato', flavor: 'Cinnamon', price: 4.5 },
        { drink: 'Macchiato', flavor: 'Chestnuts', price: 4.75 },
        { drink: 'Macchiato', flavor: 'Ginerbread', price: 5 },
        { drink: 'Macchiato', flavor: 'Pumpkin Spice', price: 5.25 },
        { drink: 'Macchiato', flavor: 'Apple Crisp', price: 5.5 },
        { drink: 'Macchiato', flavor: 'Mrs. Claus Special', price: 6.5 },
    ]
    expect(realMenu).toStrictEqual(realMenuResult)
})
