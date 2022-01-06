import { romanToArabic } from '../utils/roman.js'

test('Should be 1', () => {
    expect(romanToArabic('I')).toBe(1)
})

test('Should be 4', () => {
    expect(romanToArabic('IV')).toBe(4)
})

test('Should be 6', () => {
    expect(romanToArabic('VI')).toBe(6)
})

test('Should be 95', () => {
    expect(romanToArabic('XCV')).toBe(95)
})

test('Should be 100', () => {
    expect(romanToArabic('C')).toBe(100)
})

test('Should be 512', () => {
    expect(romanToArabic('DXII')).toBe(512)
})

test('Should be 1024', () => {
    expect(romanToArabic('MXXIV')).toBe(1024)
})
test('Should be 12345', () => {
    expect(romanToArabic('MMMMMMMMMMMMCCCXLV')).toBe(12345)
})

test('Should be 420', () => {
    expect(romanToArabic('CDXX')).toBe(420)
})

test('Should be 69', () => {
    expect(romanToArabic('LXIX')).toBe(69)
})

test('Should be 2021', () => {
    expect(romanToArabic('MMXXI')).toBe(2021)
})

test('Should be 2022', () => {
    expect(romanToArabic('mmxxii')).toBe(2022)
})
