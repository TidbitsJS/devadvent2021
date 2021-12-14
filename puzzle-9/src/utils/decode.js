export const decode = input => {
    let output = '';

    // split the binary string into an array of 8-bit chunks
    const bytes = input.match(/.{1,8}/g);

    // loop through each chunk
    for (let i = 0; i < bytes.length; i++) {
        // convert each chunk to decimal
        const byte = parseInt(bytes[i], 2);

        // convert the decimal to a character
        output += String.fromCharCode(byte);
    }

    return output;
}
