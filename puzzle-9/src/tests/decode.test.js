import { decode } from '../utils/decode.js'
import { readFile } from '../utils/helpers.js'

test(`Test data file 1`, async () => {
    const message = await readFile('./src/tests/test_messages/1.data')
    const decodedMessage = decode(message)
    expect(decodedMessage).toBe('Jingle bells')
})

test(`Test data file 2`, async () => {
    const message = await readFile('./src/tests/test_messages/2.data')
    const decodedMessage = decode(message)
    expect(decodedMessage).toBe('Merry Christmas!')
})

test(`Test data file 3`, async () => {
    const message = await readFile('./src/tests/test_messages/3.data')
    const decodedMessage = decode(message)
    expect(decodedMessage).toBe('Santa Clause is coming to town!')
})
