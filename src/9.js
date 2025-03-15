  const getRandomCode = () => {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let randomLetter = String.fromCharCode(65 + randomNumber % 26);
    return `${randomLetter}${randomNumber}`;
  }