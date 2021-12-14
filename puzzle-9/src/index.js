import { decode } from './utils/decode.js'
import { readFile } from './utils/helpers.js'

const run = async () => {
    const message = await readFile('./src/data/message.data')
    const decodedMessage = decode(message)
    console.log('Content of the secret message 💌:')
    console.log(decodedMessage)
}

run()
