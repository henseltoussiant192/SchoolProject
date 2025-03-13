function getRandomCode() {
  const min = 1000;
  const max = 9999;
  const length = max - min + 1;
  let code = "";
  for (let i = 0; i < length; i++) {
    code += Math.floor(Math.random() * 10);
  }
  return code;
}
