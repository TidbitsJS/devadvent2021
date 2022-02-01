import fs from 'fs'

const readFile = async path => {
    try {
        return await fs.promises.readFile(path, 'utf8')
    } catch (error) {
        throw new Error(error)
    }
}

export const printMap = map => {
    map.forEach(row =>
        console.log(
            row
                .map(cell => {
                    if (cell === 'S') return '🎅'
                    else if (cell === 'N') return '💈'
                    else return ' '
                })
                .join(''),
        ),
    )
}

export const generateMap = async path => {
    const data = await readFile(path)
    const rows = data.split('\n')
    const map = rows.reduce((acc, row) => {
        acc.push(row.split(''))
        return acc
    }, [])
    return map
}

export const directionEmoji = direction => {
    if (direction.includes('up') && direction.includes('right')) return '↗️'
    if (direction.includes('up') && direction.includes('left')) return '↖️'
    if (direction.includes('down') && direction.includes('right')) return '↗️'
    if (direction.includes('down') && direction.includes('left')) return '↙️'
    else if (direction.includes('down')) return '⬇️'
    else if (direction.includes('up')) return '⬆️'
    else if (direction.includes('left')) return '⬅️'
    else if (direction.includes('right')) return '➡️'
    else ''
}
