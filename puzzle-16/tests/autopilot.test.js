import { generateMap } from '../src/utils/map.js'
import { findDirection, navigateMap } from '../src/utils/autopilot.js'

test('Should find direction: down', async () => {
    const map = await generateMap('src/data/test-data/d.data')
    const direction = findDirection(map)
    expect(direction).toContain('down')
})

test('Should find direction: left', async () => {
    const map = await generateMap('src/data/test-data/l.data')
    const direction = findDirection(map)
    expect(direction).toContain('left')
})

test('Should find direction: up', async () => {
    const map = await generateMap('src/data/test-data/u.data')
    const direction = findDirection(map)
    expect(direction).toContain('up')
})

test('Should find direction: right', async () => {
    const map = await generateMap('src/data/test-data/r.data')
    const direction = findDirection(map)
    expect(direction).toContain('right')
})

test('Should find direction: up, right', async () => {
    const map = await generateMap('src/data/test-data/ur.data')
    const direction = findDirection(map)
    expect(direction).toContain('up')
    expect(direction).toContain('right')
})

test('Should find direction: up, left', async () => {
    const map = await generateMap('src/data/test-data/ul.data')
    const direction = findDirection(map)
    expect(direction).toContain('up')
    expect(direction).toContain('left')
})
test('Should find direction: down, left', async () => {
    const map = await generateMap('src/data/test-data/dl.data')
    const direction = findDirection(map)
    expect(direction).toContain('down')
    expect(direction).toContain('left')
})
test('Should find direction: down, right', async () => {
    const map = await generateMap('src/data/test-data/dr.data')
    const direction = findDirection(map)
    expect(direction).toContain('down')
    expect(direction).toContain('right')
})

test('Should navigate: up', async () => {
    const map = await generateMap('src/data/test-data/test-1.data')
    const newMap = navigateMap(map, ['up'])
    const expectedMap = [
        ['#', 'S', '#', '#', '#'],
        ['#', '#', '#', '#', '#'],
        ['#', '#', '#', '#', '#'],
        ['#', '#', '#', 'N', '#'],
        ['#', '#', '#', '#', '#'],
    ]
    expect(newMap).toStrictEqual(expectedMap)
})

test('Should navigate: down', async () => {
    const map = await generateMap('src/data/test-data/test-1.data')
    const newMap = navigateMap(map, ['down'])
    const expectedMap = [
        ['#', '#', '#', '#', '#'],
        ['#', '#', '#', '#', '#'],
        ['#', 'S', '#', '#', '#'],
        ['#', '#', '#', 'N', '#'],
        ['#', '#', '#', '#', '#'],
    ]
    expect(newMap).toStrictEqual(expectedMap)
})

test('Should navigate: right', async () => {
    const map = await generateMap('src/data/test-data/test-1.data')
    const newMap = navigateMap(map, ['right'])
    const expectedMap = [
        ['#', '#', '#', '#', '#'],
        ['#', '#', 'S', '#', '#'],
        ['#', '#', '#', '#', '#'],
        ['#', '#', '#', 'N', '#'],
        ['#', '#', '#', '#', '#'],
    ]
    expect(newMap).toStrictEqual(expectedMap)
})

test('Should navigate: left', async () => {
    const map = await generateMap('src/data/test-data/test-1.data')
    const newMap = navigateMap(map, ['left'])
    const expectedMap = [
        ['#', '#', '#', '#', '#'],
        ['S', '#', '#', '#', '#'],
        ['#', '#', '#', '#', '#'],
        ['#', '#', '#', 'N', '#'],
        ['#', '#', '#', '#', '#'],
    ]
    expect(newMap).toStrictEqual(expectedMap)
})

test('Should navigate: up, left', async () => {
    const map = await generateMap('src/data/test-data/test-1.data')
    const newMap = navigateMap(map, ['up', 'left'])
    const expectedMap = [
        ['S', '#', '#', '#', '#'],
        ['#', '#', '#', '#', '#'],
        ['#', '#', '#', '#', '#'],
        ['#', '#', '#', 'N', '#'],
        ['#', '#', '#', '#', '#'],
    ]
    expect(newMap).toStrictEqual(expectedMap)
})

test('Should navigate: down, left', async () => {
    const map = await generateMap('src/data/test-data/test-1.data')
    const newMap = navigateMap(map, ['down', 'left'])
    const expectedMap = [
        ['#', '#', '#', '#', '#'],
        ['#', '#', '#', '#', '#'],
        ['S', '#', '#', '#', '#'],
        ['#', '#', '#', 'N', '#'],
        ['#', '#', '#', '#', '#'],
    ]
    expect(newMap).toStrictEqual(expectedMap)
})

test('Should navigate: up, right', async () => {
    const map = await generateMap('src/data/test-data/test-1.data')
    const newMap = navigateMap(map, ['up', 'right'])
    const expectedMap = [
        ['#', '#', 'S', '#', '#'],
        ['#', '#', '#', '#', '#'],
        ['#', '#', '#', '#', '#'],
        ['#', '#', '#', 'N', '#'],
        ['#', '#', '#', '#', '#'],
    ]
    expect(newMap).toStrictEqual(expectedMap)
})

test('Should navigate: down, right', async () => {
    const map = await generateMap('src/data/test-data/test-1.data')
    const newMap = navigateMap(map, ['down', 'right'])
    const expectedMap = [
        ['#', '#', '#', '#', '#'],
        ['#', '#', '#', '#', '#'],
        ['#', '#', 'S', '#', '#'],
        ['#', '#', '#', 'N', '#'],
        ['#', '#', '#', '#', '#'],
    ]
    expect(newMap).toStrictEqual(expectedMap)
})

test('Should autopilot the right way #1', async () => {
    const map = await generateMap('src/data/test-data/test-1.data')
    const direction = findDirection(map)
    const newMap = navigateMap(map, direction)
    const expectedMap = [
        ['#', '#', '#', '#', '#'],
        ['#', '#', '#', '#', '#'],
        ['#', '#', 'S', '#', '#'],
        ['#', '#', '#', 'N', '#'],
        ['#', '#', '#', '#', '#'],
    ]
    expect(newMap).toStrictEqual(expectedMap)
})

test('Should autopilot the right way #1', async () => {
    const map = await generateMap('src/data/test-data/test-2.data')
    const direction = findDirection(map)
    const newMap = navigateMap(map, direction)
    const expectedMap = [
        ['#', '#', '#', '#', '#'],
        ['#', '#', '#', '#', 'N'],
        ['#', '#', '#', '#', 'S'],
        ['#', '#', '#', '#', '#'],
        ['#', '#', '#', '#', '#'],
    ]
    expect(newMap).toStrictEqual(expectedMap)
})
