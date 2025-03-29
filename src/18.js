const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines;
lines = '';

let inputLines = [];
inputLines.push(lines);
while (true) {
  let line = process.stdin.readline();
  if (!line) break;

  inputLines.push(line);

  for (let i = 0; i < inputLines.length; i++) {
    inputLines[i] = JSON.parse(inputLines[i]);
  }
}

let output = '';

output = 'Your code here';

readline.close();

console.log(output);
