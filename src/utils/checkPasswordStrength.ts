const strongPasswordReg = new RegExp(
  '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})'
);
const mediumPasswordReg = new RegExp(
  '((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))'
);
const weakPasswordReg = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.{6,})');

export default function checkPasswordStrength(password: string) {
  if (strongPasswordReg.test(password)) {
    return 3;
  } else if (mediumPasswordReg.test(password)) {
    return 2;
  } else if (weakPasswordReg.test(password)) {
    return 1;
  } else {
    return 0;
  }
}
