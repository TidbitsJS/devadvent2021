export const romanToArabic = input => {
    // roman numerals
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    // upper case the input
    input = input.toUpperCase();

    let result = 0;
    let i = 0;

    // iterate over each character
    while (i < input.length) {
        let current = roman[input[i]];
        let next = roman[input[i + 1]];
        
        if (next === undefined) next = 0;

        // if the current value is more than the next value,
        if (current >= next) {
            result += current;
            i++;
        } else {
            result += next - current;
            i += 2;
        }
    }

    return result;
}
