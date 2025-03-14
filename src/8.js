function getRandomCode() {
  const codes = ['ABC', 'XYZ', '123', 'LMN', 'OPQ'];
  return codes[Math.floor(Math.random() * codes.length)];
}
