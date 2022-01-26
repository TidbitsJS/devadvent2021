import { countdown, formatCountdown } from '../src/utils/date-format'
test('Should give the exact days to Christmas', () => {
    const date = new Date(2021, 11, 25, 0, 0, 0, 0)
    const refDate = new Date(2021, 11, 15, 0, 0, 0, 0)
    expect(countdown(date, refDate).days).toBe(10)
    expect(countdown(date, refDate).hours).toBe(0)
    expect(countdown(date, refDate).minutes).toBe(0)
    expect(countdown(date, refDate).seconds).toBe(0)
})

test('Should give the exact days, hours, minutes, seconds #1', () => {
    const date = new Date(2022, 1, 14, 10, 30, 22, 0)
    const refDate = new Date(2021, 11, 15, 0, 0, 0, 0)
    expect(countdown(date, refDate).days).toBe(61)
    expect(countdown(date, refDate).hours).toBe(10)
    expect(countdown(date, refDate).minutes).toBe(30)
    expect(countdown(date, refDate).seconds).toBe(22)
})

test('Should give the exact days, hours, minutes, seconds #2', () => {
    const date = new Date(2030, 8, 20, 14, 26, 59, 0)
    const refDate = new Date(2021, 11, 15, 14, 19, 17, 0)
    expect(countdown(date, refDate).days).toBe(3200)
    expect(countdown(date, refDate).hours).toBe(23)
    expect(countdown(date, refDate).minutes).toBe(7)
    expect(countdown(date, refDate).seconds).toBe(42)
})

test('Should write out days, hours, minutes, seconds', () => {
    expect(
        formatCountdown({ days: 9, hours: 1, minutes: 31, seconds: 39 }),
    ).toBe('9 days, 1 hours, 31 minutes, 39 seconds')
})

test('Should write out hours, minutes, seconds #1', () => {
    expect(
        formatCountdown({ days: 0, hours: 7, minutes: 11, seconds: 2 }),
    ).toBe('7 hours, 11 minutes, 2 seconds')
})

test('Should write out hours, minutes, seconds #2', () => {
    expect(
        formatCountdown({ days: 0, hours: 7, minutes: 11, seconds: 0 }),
    ).toBe('7 hours, 11 minutes, 0 seconds')
})

test('Should write out minutes, seconds #1', () => {
    expect(formatCountdown({ days: 0, hours: 0, minutes: 6, seconds: 9 })).toBe(
        '6 minutes, 9 seconds',
    )
})

test('Should write out minutes, seconds #2', () => {
    expect(
        formatCountdown({ days: 0, hours: 0, minutes: 55, seconds: 0 }),
    ).toBe('55 minutes, 0 seconds')
})

test('Should write out seconds #1', () => {
    expect(
        formatCountdown({ days: 0, hours: 0, minutes: 0, seconds: 21 }),
    ).toBe('21 seconds')
})

test('Should write out seconds #2', () => {
    expect(
        formatCountdown({ days: 0, hours: 0, minutes: 0, seconds: -30 }),
    ).toBe('No more wait')
})
