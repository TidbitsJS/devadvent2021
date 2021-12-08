// import uuid4
import {v4 as uuid4} from 'uuid';

// import candy data
import candies from '../data/candy.js';

export const generateCandyBags = (bagCount, candyCount) => {
    // Return an array of "candy bags".
    // Each bag has a unique ID - (UUID)
    // Each bag has `candies` - an array of candy
    // -   When no parameter is passed, return an empty array
    // -   When the `candyCount` parameter is not passed, default to 3
    // -   Each generated bag should have a valid UUID
    // -   No candy should be in the bag more than once
    // -   Not every bag should have the same candy (mix it up!)
    // -   If `candyCount` is higher than

    // no parameter passed, retun an empty array
    if (!bagCount) {
        return [];
    }

    // if candyCount is not passed, default to 3
    if (!candyCount) {
        candyCount = 3;
    }

    // if candyCount is higher than the number of candies, throw an error
    if (candyCount > candies.length) {
        throw new Error('TOO_MUCH_CANDY_PER_BAG');
    }

    // create an empty array to hold candy bags
    let candyBags = [];

    // loop through the number of candy bags
    for (let i = 0; i < bagCount; i++) {
        // create a new candy bag
        let candyBag = {
            id: uuid4(),
            candies: []
        };

        // loop through the number of candies
        for (let j = 0; j < candyCount; j++) {
            // create a new candy
            let candy = {
                id: uuid4(),
                name: candies[Math.floor(Math.random() * candies.length)]
            };

            // check if the candy is already in the bag
            if (candyBag.candies.includes(candy)) {
                // if so, loop again
                j--;
            } else {
                // if not, add the candy to the bag
                candyBag.candies.push(candy.name);
            }
        }

        // add the candy bag to the array
        candyBags.push(candyBag);
    }

    // return the candy bags
    return candyBags;
}
