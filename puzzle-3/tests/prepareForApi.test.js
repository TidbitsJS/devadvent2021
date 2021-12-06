const { prepareForAPI } = require('../utils/menu')

test('prepareForApi should return correct results', () => {
    expect(
        prepareForAPI([
            {
                drink: 'Latte',
                flavor: undefined,
                price: 3,
            },
            {
                drink: 'Latte',
                flavor: 'Cinnamon',
                price: 4,
            },
            {
                drink: 'Latte',
                flavor: 'Mrs. Claus Special',
                price: 6,
            },
        ]),
    ).toStrictEqual([
        {
            drink: 'Latte',
            price: 3,
            flavor: undefined,
            name: 'Latte',
            slug: 'latte',
        },
        {
            drink: 'Latte',
            flavor: 'Cinnamon',
            price: 4,
            name: 'Cinnamon Latte',
            slug: 'cinnamon-latte',
        },
        {
            drink: 'Latte',
            flavor: 'Mrs. Claus Special',
            price: 6,
            name: 'Mrs. Claus Special Latte',
            slug: 'mrs-claus-special-latte',
        },
    ])
})
