import { finishGame } from '../script.js';

const heartsWrapper = document.querySelector('.hearts');
let playerHealth = 5;

export const reduceHealth = () => {
  heartsWrapper.innerHTML = '';
  playerHealth--;
  if (!playerHealth) {
    finishGame('gameOver');
  } else {
    for (let i = 0; i < playerHealth; i++) {
      heartsWrapper.innerHTML += `<img src='./assets/heart.png'>`;
    }
  }
};
