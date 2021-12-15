import { locomotive } from './data/train.js'
import { iterateWagons, filterOldBreaks } from './utils/train.js'

console.log('Complete train:')
iterateWagons(locomotive)

console.log('----------------------------------------')

console.log('Wagons that need brakes checked:')
iterateWagons(
    locomotive,
    wagon => {
        console.log(`🚨 ${wagon.name} needs their brakes checked`)
    },
    filterOldBreaks,
)

console.log('----------------------------------------')

console.log('Locomotives:')
iterateWagons(
    locomotive,
    wagon => console.log(`🚂 ${wagon.name} is a locomotive`),
    wagon => wagon.isLocomotive,
)
