import { romanToArabic } from './utils/roman.js'

const roman = 'MMXXII'
console.log(
    `🎇 I wish you a merry Christmas, and a very happy ${romanToArabic(
        roman,
    )} 🎇`,
)
