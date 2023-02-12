import { finishGame } from '../script.js';
const gameWrapper = document.querySelector('.game-wrapper');

let interval;

const checkForWin = () => {
  const enemies = document.querySelectorAll('.enemy');
  if (enemies.length === 0) {
    finishGame('win');
  }
};

const checkForContact = bullet => {
  let bulletCoords = bullet.getBoundingClientRect();
  let enemies = document.querySelectorAll('.enemy');
  enemies.forEach(enemy => {
    let enemyCoords = enemy.getBoundingClientRect();
    if (
      bulletCoords.top <= enemyCoords.top + 100 &&
      bulletCoords.left >= enemyCoords.left &&
      bulletCoords.right <= enemyCoords.right
    ) {
      console.log('contact');
      bullet.remove();
      enemy.remove();
      checkForWin();
    }
  });
};

const createBullet = playerCoords => {
  const bullet = document.createElement('div');
  bullet.classList.add('bullet');
  bullet.style.left = `${playerCoords.left + 50}px`;
  bullet.id = `b${Math.floor(Math.random() * 50)}`;
  return bullet;
};

const shoot = () => {
  const playerCoords = document
    .querySelector('.player')
    .getBoundingClientRect();
  const bullet = createBullet(playerCoords);
  gameWrapper.appendChild(bullet);
  interval = setInterval(() => {
    checkForContact(bullet);
  }, 100);
  setTimeout(() => {
    clearInterval(interval);
    bullet.remove();
  }, 1000);
};

export default shoot;
