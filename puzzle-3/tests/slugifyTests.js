const tests = [
    { input: '', output: '' },
    { input: 'Test ABC', output: 'test-abc' },
    { input: 'Gingerbread Latte', output: 'gingerbread-latte' },
    { input: 'CAPSLOCK TEST', output: 'capslock-test' },
    {
        input: 'Some more         spaces',
        output: 'some-more-spaces',
    },
    {
        input: 'Special Char Test Déjà Vu',
        output: 'special-char-test-deja-vu',
    },
    { input: '     Leading hyphens', output: 'leading-hyphens' },
    { input: 'Trailing hyphens    ', output: 'trailing-hyphens' },
    { input: 'F*ck this!', output: 'f-ck-this' },
    { input: 'Merry X-mas', output: 'merry-x-mas' },
    { input: 'Ho ho ho 🎅', output: 'ho-ho-ho' },
]
module.exports = tests
