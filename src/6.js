function getRandomColor() {
  let colors = ['red', 'green', 'blue', 'yellow', 'orange'];
  return colors[Math.floor(Math.random() * colors.length)];
}

getRandomColor();
