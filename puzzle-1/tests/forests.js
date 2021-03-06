const forests = [
    {
        description: '🤷 dont find rudolf in an empty forest',
        test: [
            ['🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲'],
        ],
        result: { row: -1, col: -1 },
    },
    {
        description: '🔎 find rudolf in forest v1',
        test: [
            ['  ', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🦌'],
            ['🌲', '🌲', '🌲', '🌲'],
        ],
        result: { row: 2, col: 3 },
    },

    {
        description: '🔎 find rudolf in forest v2',
        test: [
            ['🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🦌', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲'],
        ],
        result: { row: 1, col: 1 },
    },

    {
        description: '🔎 find rudolf in forest v3',
        test: [
            ['🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲'],
            ['🦌', '🌲', '🌲', '🌲'],
        ],
        result: { row: 3, col: 0 },
    },
    {
        description: '🔎 find rudolf in huge forest',
        test: [
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🦌', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
            ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
        ],
        result: { row: 29, col: 5 },
    },
]

module.exports = forests
