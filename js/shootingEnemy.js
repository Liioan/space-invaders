import { reduceHealth } from './playerHealth.js';

const gameWrapper = document.querySelector('.game-wrapper');

let interval;

const checkForContact = enemyBullet => {
  let bulletCoords = enemyBullet.getBoundingClientRect();
  let playerCoords = document.querySelector('.player').getBoundingClientRect();
  if (
    bulletCoords.top + 100 >= playerCoords.top &&
    bulletCoords.left >= playerCoords.left &&
    bulletCoords.right <= playerCoords.right
  ) {
    enemyBullet.remove();
    reduceHealth();
  }
};

const createEnemyBullet = enemyCoords => {
  const enemyBullet = document.createElement('div');
  enemyBullet.classList.add('enemy-bullet');
  enemyBullet.style.left = `${enemyCoords.left + 50}px`;
  enemyBullet.style.bottom = `${enemyCoords.top}px`;
  enemyBullet.id = `eb${Math.floor(Math.random() * 50)}`;
  return enemyBullet;
};

const enemyShoot = () => {
  const enemies = document.querySelectorAll('.enemy');
  const randomEnemy = enemies[Math.floor(Math.random() * enemies.length)];
  const enemyCoords = randomEnemy.getBoundingClientRect();
  const enemyBullet = createEnemyBullet(enemyCoords);
  gameWrapper.appendChild(enemyBullet);
  interval = setInterval(() => {
    checkForContact(enemyBullet);
  }, 100);
  setTimeout(() => {
    clearInterval(interval);
    enemyBullet.remove();
  }, 1000);
};

export default enemyShoot;
