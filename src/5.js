function getRandomNumber() {
  let min = 1;
  let max = 10;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber());
