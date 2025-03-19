function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generateRandomCode(length = 6) {
  let code = '';
  for (let i = 0; i < length; i++) {
    code += getRandomInt(10);
  }
  return code;
}
