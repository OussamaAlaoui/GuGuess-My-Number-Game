'use strict';
let score = 20;
let heighscore = 0;
const myValue = Math.floor(Math.random() * 20) + 1;
console.log(Math.floor(Math.random() * 20) + 1);
console.log(typeof heighscore);
document.querySelector('.again').addEventListener('click', function () {
  let score = 20;
  let heighscore = 0;
  const myValue = Math.floor(Math.random() * 20) + 1;
  document.querySelector('#message').textContent = 'Start guessing..';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.TheGuess').value = '';
  document.querySelector('#score').textContent = score;
});
document.querySelector('.click-check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.TheGuess').value);
  if (!guess) {
    document.querySelector('#message').textContent =
      '⚠️ Please Insert a value!!';
  } else if (guess > 20 || guess < 1) {
    document.querySelector('#message').textContent =
      '⚠️ Please Insert a value between 1-20!!';
  } else {
    document.querySelector('.number').textContent = guess;
    if (score > 1) {
      if (guess < myValue) {
        score--;
        document.querySelector('#message').textContent = '📉 To Low...!';
        document.querySelector('#score').textContent = score;
      } else if (guess > myValue) {
        score--;
        document.querySelector('#message').textContent = '📈 Too Hight..!';
        document.querySelector('#score').textContent = score;
      } else {
        document.querySelector('#message').textContent =
          '🎉 Congratulations! You have found the correct value';
        heighscore = score;
        document.querySelector('#highscore').textContent = highscore;
      }
    } else {
      document.querySelector('#message').textContent =
        'You lost 🙁 But you can play again 😄';
      document.querySelector('#score').textContent = 0;
    }
  }
});
