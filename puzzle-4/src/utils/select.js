import boxes from '../data/boxes.js'

const rotateBox = (box, direction) => {
    const newBox = {...box}
    // rotate length height width

    switch (direction) {
        case 'left':
            newBox.length = box.height
            newBox.height = box.width
            newBox.width = box.length
            break
        case 'right':
            newBox.length = box.width
            newBox.height = box.length
            newBox.width = box.height
            break
        case 'up':
            newBox.length = box.length
            newBox.height = box.width
            newBox.width = box.height
            break
        case 'down':
            newBox.length = box.height
            newBox.height = box.length
            newBox.width = box.width
            break
        case 'back':
            newBox.length = box.width
            newBox.height = box.height
            newBox.width = box.length
            break
        
        default:
            break

    }

    return newBox
}

export const selectBox = item => {
    // Select the smallest possible box from `boxes` for any given item
    // An item looks something like {width: X, length: Y, height: Z}

    // Find the smallest box that can fit the item
    // rotate the box until it fits
    
    const smallestBox = boxes.find(box => {
        if (item.width <= box.width && item.length <= box.length && item.height <= box.height) {
            return box
        }

        // rotate the box until it fits
        const directions = ['left', 'right', 'up', 'down', 'back']
        for (let i = 0; i < directions.length; i++) {
            const rotatedBox = rotateBox(box, directions[i])
            if (item.width <= rotatedBox.width && item.length <= rotatedBox.length && item.height <= rotatedBox.height) {
                return rotatedBox
            }
        }
    })

    if (!smallestBox) return undefined
    
    return smallestBox
}
