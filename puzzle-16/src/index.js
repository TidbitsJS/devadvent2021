import prompt from 'prompt'
import { generateMap, directionEmoji, printMap } from './utils/map.js'
import { navigateMap, findDirection } from './utils/autopilot.js'

prompt.message = ''
prompt.delimiter = ':'
prompt.start()

const run = async () => {
    let map = await generateMap('src/data/map-medium.data')
    printMap(map)
    let direction = ''
    const interval = setInterval(() => {
        console.clear()
        direction = findDirection(map)
        if (!direction) return clearInterval(interval)
        console.log("Santa's autopilot 🎅🛷")
        map = navigateMap(map, direction)
        printMap(map)
        console.log('Direction:', directionEmoji(direction))
    }, 500)
}

run()
