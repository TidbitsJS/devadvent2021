const createMenu = (drinks, flavors) => {
    // Create an array of objects, where each object has
    // the name of the drink, name of the flavor, and the total price.
    // Do this for every possible combination of drinks and flavors
    // (including drinks and no extra flavor).
    // Example:
    // [
    //     { drink: 'Hot Chocolate', flavor: 'Gingerbread', price: 5.5 },
    //     { drink: 'Hot Chocolate', flavor: 'Cinnamon', price: 5 },
    //     ...
    // ]

    // ❗ The menu has to be sorted by drink name, then by price

    // store the drinks and flavors in an array
    const menu = [];

    // loop through the drinks
    for (let i = 0; i < drinks.length; i++) {
        // push the drink name to the menu
        menu.push({
            drink: drinks[i].name,
            flavor: undefined,
            price: drinks[i].price
        });

        // loop through the flavors
        for (let j = 0; j < flavors.length; j++) {
            // push the drink name and flavor name to the menu with the price
            menu.push({
                drink: drinks[i].name,
                flavor: flavors[j].name,
                price: drinks[i].price + flavors[j].price
            });
        }
    }

    // Sort the menu by drink name, then by price
    menu.sort((a, b) => {
        if (a.drink < b.drink) {
           // drink a comes before b
            return -1;
        } else if (a.drink > b.drink) {
            // drink a comes after b
            return 1;
        } else {
            // if the drinks are the same, sort by price
            if (a.price < b.price) {
                return -1;
            } else if (a.price > b.price) {
                return 1;
            } else {
                return 0;
            }
        }
    });

    return menu
}

module.exports = { createMenu }
