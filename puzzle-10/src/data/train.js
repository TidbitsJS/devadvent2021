const wagon9 = {
    name: 'W-18342',
    emoji: '🚋',
    lastBreakRevision: '2021-02-15',
    next: null,
}

const wagon8 = {
    name: 'W-17022',
    emoji: '🚋',
    lastBreakRevision: '2020-12-30',
    next: wagon9,
}
const wagon7 = {
    name: 'W-19215',
    emoji: '🚋',
    lastBreakRevision: '2020-12-31',
    next: wagon8,
}
const wagon6 = {
    name: 'W-18453',
    emoji: '🚋',
    lastBreakRevision: '2021-02-04',
    next: wagon7,
}
const wagon5 = {
    name: 'W-13589',
    emoji: '🚋',
    lastBreakRevision: '2017-11-02',
    next: wagon6,
}
const wagon4 = {
    name: 'W-10396',
    emoji: '🚋',
    lastBreakRevision: '2021-12-01',
    next: wagon5,
}
const wagon3 = {
    name: 'W-20031',
    emoji: '🚋',
    lastBreakRevision: '2021-07-20',
    next: wagon4,
}
const wagon2 = {
    name: 'W-19273',
    emoji: '🚋',
    lastBreakRevision: '2018-11-20',
    next: wagon3,
}
const wagon1 = {
    name: 'W-10582',
    emoji: '🚋',
    lastBreakRevision: '2021-02-15',
    next: wagon2,
}
export const locomotive = {
    name: 'L-283',
    emoji: '🚂',
    isLocomotive: true,
    next: wagon1,
}
