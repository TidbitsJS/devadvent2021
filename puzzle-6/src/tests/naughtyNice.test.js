import {
    findOutIfNaughtyOrNice,
    getKids,
    getNiceKids,
    getNaughtyKids,
} from '../utils/naughtyOrNice'

const kid1 = { events: [] }
test('Kid with no events should be nice', () => {
    expect(findOutIfNaughtyOrNice(kid1)).toBe('nice')
})

const kid2 = {
    events: [
        { effect: -10 },
        { effect: 10 },
        { effect: -10 },
        { effect: 10 },
        { effect: -1 },
    ],
}
test('Kid with a negative value should be naughty', () => {
    expect(findOutIfNaughtyOrNice(kid2)).toBe('naughty')
})

const kid3 = {
    events: [{ effect: -10 }, { effect: 10 }, { effect: 10 }, { effect: -5 }],
}
test('Kid with a negative value should be nice', () => {
    expect(findOutIfNaughtyOrNice(kid3)).toBe('nice')
})

const kids = getKids()
test('There should be 100 kids in total', () => {
    expect(kids.length).toBe(100)
})

test('There should be 20 naughty kids', () => {
    expect(getNaughtyKids(kids).length).toBe(20)
})

test('There should be 80 nice kids', () => {
    expect(getNiceKids(kids).length).toBe(80)
})

test('There should be a total scoring of 67924', () => {
    const total = kids.reduce(
        (acc, kid) =>
            acc + kid.events.reduce((acc, event) => acc + event.effect, 0),
        0,
    )
    expect(total).toBe(67924)
})
