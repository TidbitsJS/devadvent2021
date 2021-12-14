import fs from 'fs'

export const readFile = async path => {
    try {
        return await fs.promises.readFile(path, 'utf8')
    } catch (error) {
        throw new Error(error)
    }
}
