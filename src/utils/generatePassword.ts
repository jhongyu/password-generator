const charObj = {
  lowercase: 'abcdefghijklmnopqrstuvxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVXYZ',
  number: '0123456789',
  symbol: '$&*+@#^-_!?',
};
type Key = keyof typeof charObj;

export default function generatePassword(
  passwordLength: number,
  conditions: Key[]
) {
  let password = '';

  while (password.length < passwordLength) {
    const selectedCondition = conditions[
      Math.floor(Math.random() * conditions.length)
    ] as Key;
    const charSet = charObj[selectedCondition];

    password += charSet[Math.floor(Math.random() * charSet.length)];
  }

  return password;
}
