'use strict';
let score = 20;
let highscore = 0;
let myValue = Math.floor(Math.random() * 20) + 1;
// Setting messages realated to the situation
function setMessage(message) {
  document.querySelector('#message').textContent = message;
}
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  highscore = 0;
  myValue = Math.floor(Math.random() * 20) + 1;
  console.log(myValue);
  setMessage('Start guessing..');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.TheGuess').value = '';
  document.querySelector('#score').textContent = score;
  document.querySelector('body').style.backgroundColor = 'black';
});
document.querySelector('.click-check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.TheGuess').value);
  // No input
  if (!guess) {
    setMessage('⚠️ Please Insert a value!!');
  } else if (guess > 20 || guess < 1) {
    // testing lasted attempts
    setMessage('⚠️ Please Insert a value between 1-20!!');
  } else {
    // Input value different then the random one
    if (score > 1) {
      if (guess == myValue) {
        document.querySelector('body').style.backgroundColor = 'green';
        setMessage('🎉 Congratulations! You have found the correct value');
        document.querySelector('.number').textContent = guess;

        if (score > Number(highscore)) {
          highscore = score;
          document.querySelector('#highscore').textContent = Number(highscore);
        }
      } else {
        score--;
        document.querySelector('#score').textContent = score;
        setMessage(guess > myValue ? '📈 Too Hight..!' : '📉 Too Low...!');
      }
    } else {
      document.querySelector('body').style.backgroundColor = 'red';
      setMessage('You lost 🙁 But you can play again 😄');
      document.querySelector('#score').textContent = 0;
    }
  }
});
