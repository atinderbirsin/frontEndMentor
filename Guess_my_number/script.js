'use strict';

let randNum = Math.floor(Math.random() * 20 + 1);
let guessBtn = document.querySelector('.check');
let score = 20;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const displayScore = score => {
  document.querySelector('.score').textContent = score;
};

const setBackground = color => {
  document.body.style.backgroundColor = color;
};

const setWidth = width => {
  document.querySelector('.number').style.width = width;
};

const setSecretNumValue = num => {
  document.querySelector('.number').textContent = num;
};

guessBtn.addEventListener('click', () => {
  let guessNum = Number(document.querySelector('.guess').value);

  //when there is no number
  if (!guessNum) {
    displayMessage('No Number!');
  }

  //when guess is equal to random number
  else if (guessNum === randNum) {
    let highscore = document.querySelector('.highscore');

    displayScore(score);
    setSecretNumValue(randNum);
    setBackground('green');
    displayMessage('Correct Answer');
    setWidth('30rem');

    if (score > highscore.textContent) {
      highscore.textContent = score;
    }
  }
  //when guess is not equal to randNum
  else if (guessNum !== randNum) {
    if (score > 1) {
      score--;
      displayScore(score);
      displayMessage(guessNum > randNum ? 'Too High' : 'Too Low');
    } else {
      displayMessage('You have Lost');
      displayScore(0);
    }
  }
});

//button to start again game
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  displayScore(score);

  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  setBackground('#222');
  setWidth('15rem');

  randNum = Math.floor(Math.random() * 20 + 1);
  setSecretNumValue('?');
});
