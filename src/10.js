// SchoolProject.js
function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[randomNumber(letters.length)];
  }
  return color;
}

function getRandomWord() {
  var words = ['apple', 'banana', 'orange', 'grape', 'strawberry'];
  return words[randomNumber(words.length)];
}

// Example usage:
console.log(getRandomColor()); // #123ABC
console.log(getRandomWord()); // grape
