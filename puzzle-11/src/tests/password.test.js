import { generatePassword } from '../utils/security.js'

test(`Without options should throw a NOT_ENOUGH_OPTIONS error`, async () => {
    expect(() => generatePassword(8)).toThrow(Error('NOT_ENOUGH_OPTIONS'))
})

test(`Passwords should be random (4 characters)`, async () => {
    const password1 = generatePassword(4, { lowercase: true, numbers: true })
    const password2 = generatePassword(4, { lowercase: true, numbers: true })
    expect(password1).not.toBe(password2)
})

test(`Passwords should be random (8 characters)`, async () => {
    const password1 = generatePassword(8, { lowercase: true, numbers: true })
    const password2 = generatePassword(8, { lowercase: true, numbers: true })
    expect(password1).not.toBe(password2)
})
test(`Passwords should be random (16 characters)`, async () => {
    const password1 = generatePassword(16, { lowercase: true, numbers: true })
    const password2 = generatePassword(16, { lowercase: true, numbers: true })
    expect(password1).not.toBe(password2)
})
test(`Passwords should be random (32 characters)`, async () => {
    const password1 = generatePassword(32, { lowercase: true, numbers: true })
    const password2 = generatePassword(32, { lowercase: true, numbers: true })
    expect(password1).not.toBe(password2)
})

test(`The password length should be equal or bigger than the option count`, async () => {
    expect(() =>
        generatePassword(1, { uppercase: true, lowercase: true }),
    ).toThrow(Error('PASSWORD_TOO_SHORT'))
    expect(() =>
        generatePassword(2, {
            uppercase: true,
            lowercase: true,
            specialCharacters: true,
        }),
    ).toThrow(Error('PASSWORD_TOO_SHORT'))
    expect(() =>
        generatePassword(3, {
            uppercase: true,
            lowercase: true,
            specialCharacters: true,
            numbers: true,
        }),
    ).toThrow(Error('PASSWORD_TOO_SHORT'))
})

test(`Should return the correct length of password`, async () => {
    const password8 = generatePassword(8, { lowercase: true })
    const password16 = generatePassword(16, { lowercase: true, numbers: true })
    const password32 = generatePassword(32, {
        lowercase: true,
        uppercase: true,
        specialCharacters: true,
    })
    const password64 = generatePassword(64, { lowercase: true })
    expect(password8.length).toBe(8)
    expect(password16.length).toBe(16)
    expect(password32.length).toBe(32)
    expect(password64.length).toBe(64)
})

const rounds = 50
const allOptions = {
    uppercase: true,
    lowercase: true,
    numbers: true,
    specialCharacters: true,
}
for (let index = 0; index < rounds; index++) {
    const count = `(${index + 1}/${rounds})`
    test(`[${count}] specialCharacters:true should include at least 1 special character`, async () => {
        const password = generatePassword(4, allOptions)
        const hasSpecialCharacter = password
            .split('')
            .some(char => '!@#$%^&*()'.includes(char))
        expect(hasSpecialCharacter).toBe(true)
    })
}

for (let index = 0; index < rounds; index++) {
    const count = `(${index + 1}/${rounds})`
    test(`[${count}] lowercase:true should include at least 1 lowercase character`, async () => {
        const password = generatePassword(4, allOptions)
        const hasLowercase = password
            .split('')
            .some(char => 'abcdefghijklmnopqrstuvwxyz'.includes(char))
        expect(hasLowercase).toBe(true)
    })
}
for (let index = 0; index < rounds; index++) {
    const count = `(${index + 1}/${rounds})`
    test(`[${count}] uppercase:true should include at least 1 uppercase character`, async () => {
        const password = generatePassword(4, allOptions)
        const hasUppercase = password
            .split('')
            .some(char => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(char))
        expect(hasUppercase).toBe(true)
    })
}
for (let index = 0; index < rounds; index++) {
    const count = `(${index + 1}/${rounds})`
    test(`[${count}] numbers:true should include at least 1 number`, async () => {
        const password = generatePassword(4, allOptions)
        const hasNumber = password
            .split('')
            .some(char => '0123456789'.includes(char))
        expect(hasNumber).toBe(true)
    })
}

for (let index = 0; index < rounds; index++) {
    const count = `(${index + 1}/${rounds})`
    test(`[${count}] Without lowercase options, the password should not include a lowercase character`, async () => {
        const password = generatePassword(128, {
            uppercase: true,
            numbers: true,
        })
        const hasLowercase = password
            .split('')
            .some(char => 'abcdefghijklmnopqrstuvwxyz'.includes(char))
        expect(hasLowercase).toBe(false)
    })
}
for (let index = 0; index < rounds; index++) {
    const count = `(${index + 1}/${rounds})`
    test(`[${count}] Without uppercase options, the password should not include a uppercase character`, async () => {
        const password = generatePassword(128, {
            lowercase: true,
            numbers: true,
        })
        const hasUppercase = password
            .split('')
            .some(char => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(char))
        expect(hasUppercase).toBe(false)
    })
}
for (let index = 0; index < rounds; index++) {
    const count = `(${index + 1}/${rounds})`
    test(`[${count}] Without specialCharacters options, the password should not include a special character`, async () => {
        const password = generatePassword(128, {
            uppercase: true,
            lowercase: true,
        })
        const hasUppercase = password
            .split('')
            .some(char => '!@#$%^&*()'.includes(char))
        expect(hasUppercase).toBe(false)
    })
}

for (let index = 0; index < rounds; index++) {
    const count = `(${index + 1}/${rounds})`
    test(`[${count}] Without numbers options, the password should not include a number`, async () => {
        const password = generatePassword(128, {
            uppercase: true,
            lowercase: true,
        })
        const hasNumber = password
            .split('')
            .some(char => '0123456789'.includes(char))
        expect(hasNumber).toBe(false)
    })
}
