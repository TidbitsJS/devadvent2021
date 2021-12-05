const forests = [
    {
        description: 'Test Menu #1',
        test: {
            drinks: [{ name: 'Coffee', price: 2 }],
            flavors: [],
        },
        result: [{ drink: 'Coffee', flavor: undefined, price: 2 }],
    },
    {
        description: 'Test Menu #2',
        test: {
            drinks: [{ name: 'Latte', price: 3 }],
            flavors: [
                { name: 'Ginerbread', price: 1.5 },
                { name: 'Cinnamon', price: 1 },
            ],
        },
        result: [
            { drink: 'Latte', flavor: undefined, price: 3 },
            { drink: 'Latte', flavor: 'Cinnamon', price: 4 },
            { drink: 'Latte', flavor: 'Ginerbread', price: 4.5 },
        ],
    },
    {
        description: 'Test Menu #3',
        test: {
            drinks: [
                { name: 'Macchiato', price: 10 },
                { name: 'Latte', price: 3 },
            ],
            flavors: [
                { name: 'Peppermint', price: 2 },
                { name: 'Cinnamon', price: 1 },
            ],
        },
        result: [
            { drink: 'Latte', flavor: undefined, price: 3 },
            { drink: 'Latte', flavor: 'Cinnamon', price: 4 },
            { drink: 'Latte', flavor: 'Peppermint', price: 5 },
            { drink: 'Macchiato', flavor: undefined, price: 10 },
            { drink: 'Macchiato', flavor: 'Cinnamon', price: 11 },
            { drink: 'Macchiato', flavor: 'Peppermint', price: 12 },
        ],
    },
]

module.exports = forests
