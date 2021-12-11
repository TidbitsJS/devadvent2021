// Check the instructions in the README.md file
import kids from '../data/sampleData.json';

// calculate total score of events
export const findOutIfNaughtyOrNice = kid => {
    
    // if kid has no events, return 'nice'
    if (kid.events.length === 0) {
        return 'nice';
    }

    const totalScore = kid.events.reduce((acc, event) => {
        return acc + event.effect;
    }, 0);
    
    // if total score is greater than 0, return 'nice'
    return totalScore >= 0 ? 'nice' : 'naughty';
}

// return an array of kids from the sample data
export const getKids = () => {
    return kids
}

// filter kids to find only those who are nice
export const getNiceKids = kids => {
    return kids.filter(kid => {
        return findOutIfNaughtyOrNice(kid) === 'nice'
    })
}

// filter kids to find only those who are naughty
export const getNaughtyKids = kids => {
    return kids.filter(kid => {
        return findOutIfNaughtyOrNice(kid) === 'naughty'
    })
}
