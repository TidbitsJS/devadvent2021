const LOWERCASE_CHARACTERS = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "0123456789";
const SPECIAL_CHARACTERS = "!@#$%^&*()";

// generate a random number
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const generatePassword = (length, options) => {
  // Without options should throw a NOT_ENOUGH_OPTIONS error
  if (!options) {
    throw new Error("NOT_ENOUGH_OPTIONS");
  }

  // The password length should be equal or bigger than the option count
  if (length < Object.keys(options).length) {
    throw new Error("PASSWORD_TOO_SHORT");
  }

  // lowercase, uppercase, numbers, special characters
  const lowercase = options.lowercase || false;
  const uppercase = options.uppercase || false;
  const numbers = options.numbers || false;
  const specialCharacters = options.specialCharacters || false;

  // generate the password of the length passed
  let password = "";
  for (let i = 0; i < length; i++) {
    if (password.length < length) {
      if (lowercase) {
        password +=
          LOWERCASE_CHARACTERS[
            generateRandomNumber(0, LOWERCASE_CHARACTERS.length - 1)
          ];
      }

      if (uppercase) {
        password +=
          UPPERCASE_CHARACTERS[
            generateRandomNumber(0, UPPERCASE_CHARACTERS.length - 1)
          ];
      }

      if (numbers) {
        password += NUMBERS[generateRandomNumber(0, NUMBERS.length - 1)];
      }

      if (specialCharacters) {
        password +=
          SPECIAL_CHARACTERS[
            generateRandomNumber(0, SPECIAL_CHARACTERS.length - 1)
          ];
      }
    } else {
      if (password.length > length) {
        password = password.slice(0, length);
      }
      break;
    }
  }

  return password;
};
