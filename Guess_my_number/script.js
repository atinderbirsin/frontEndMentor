'use strict';

let randNum = Math.floor(Math.random() * 20 + 1);
let guessBtn = document.querySelector('.check');
let score = 20;
// console.log('before refresh', randNum);

guessBtn.addEventListener('click', () => {
  let guessNum = Number(document.querySelector('.guess').value);

  if (!guessNum) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (guessNum === randNum) {
    let highscore = document.querySelector('.highscore');
    if (score > highscore.textContent) {
      highscore.textContent = score;
      document.querySelector('.score').textContent = score;
      document.querySelector('.number').textContent = randNum;
      document.body.style.backgroundColor = 'green';
      document.querySelector('.message').textContent = 'Correct Answer';
    } else if (score === highscore.textContent) {
      document.querySelector('.score').textContent = score;
      document.querySelector('.number').textContent = randNum;
      document.body.style.backgroundColor = 'green';
      document.querySelector('.message').textContent = 'Correct Answer';
    } else if (score < highscore.textContent) {
      document.querySelector('.score').textContent = score;
      document.querySelector('.number').textContent = randNum;
      document.body.style.backgroundColor = 'green';
      document.querySelector('.message').textContent = 'Correct Answer';
    }
    // document.querySelector('.score').textContent = score;
    // document.querySelector('.number').textContent = randNum;
    // document.body.style.backgroundColor = 'green';
    // highscore.textContent = score;
    // // document.querySelector('.highscore').textContent = score;
    // document.querySelector('.message').textContent = 'Correct Answer';
  } else if (guessNum > randNum) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'Too High';
    } else {
      document.querySelector('.message').textContent = 'You have Lost';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guessNum < randNum) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'Too Low';
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'You have Lost';
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.body.style.backgroundColor = '#222222';
  // document.querySelector('.highscore').textContent = 0;
  randNum = Math.floor(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
});
