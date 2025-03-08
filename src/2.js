function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[getRandomInt(16)];
  }
  return color;
}

function getRandomArrayElement() {
  const arr = ['a', 'b', 'c'];
  return arr[getRandomInt(arr.length)];
}

const result = [getRandomColor(), getRandomArrayElement(), getRandomInt(10) + 5];
console.log(result);
