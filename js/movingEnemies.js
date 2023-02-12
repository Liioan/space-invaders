import { finishGame } from '../script.js';

const gameWrapperCoords = document
  .querySelector('.game-wrapper')
  .getBoundingClientRect().bottom;

const moveEnemies = () => {
  const enemyWrapper = document.querySelector('.enemies-wrapper');
  let currentCoords = enemyWrapper.getBoundingClientRect();
  enemyWrapper.style.top = `${currentCoords.top + 100}px`;
  currentCoords = enemyWrapper.getBoundingClientRect();
  if (currentCoords.bottom >= gameWrapperCoords) {
    finishGame('gameOver');
  }
};

export default moveEnemies;
