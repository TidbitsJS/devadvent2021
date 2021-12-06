const { slugify } = require('./helpers')

const createMenu = (drinks, flavors) => {
    const menu = []
    drinks.forEach(drink => {
        flavors.forEach(flavor => {
            menu.push({
                drink: drink.name,
                flavor: flavor.name,
                price: drink.price + flavor.price,
            })
        })
        menu.push({
            drink: drink.name,
            flavor: undefined,
            price: drink.price,
        })
    })
    return menu.sort((a, b) => {
        if (a.drink < b.drink) return -1
        if (a.drink > b.drink) return 1
        if (a.price < b.price) return -1
        if (a.price > b.price) return 1
        return 0
    })
}

const prepareForAPI = menu => {
    // Return an array of all the items of a given menu, but add 2 fields:
    // - name: Complete name, consisting of flavor + drink.
    //         Drinks with no extra flavors will just ommit the flavor field.
    //         (e.g. Hot Chocolate, Gingerbread Latte, Peppermint Cappuccino, etc.)
    // - slug: A slugified version of the name (check /utils/helpers.js)
    //         (e.g. hot-chocolate, gingerbread-latte, peppermint-cappuccino, etc.)
    // Example:
    // [
    //     {
    //         drink: 'Latte',
    //         flavor: 'Gingerbread',
    //         price: 4.5,
    //         name: 'Gingerbread Latte',
    //         slug: 'gingerbread-latte',
    //     },
    //     ...
    // ]

    return menu.map(item => {
        const name = item.flavor ? `${item.flavor} ${item.drink}` : item.drink
        return {
            ...item,
            name,
            slug: slugify(name),
        }
    })
}

module.exports = { createMenu, prepareForAPI }
