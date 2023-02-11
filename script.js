import movePlayer from './js/movingPlayer.js';
import spawnEnemies from './js/spawnEnemies.js';

//- moving system
let isMoving = false;
window.addEventListener('keydown', e => {
  if (isMoving) return;
  movePlayer(e.code);
  isMoving = true;
  setTimeout(() => {
    isMoving = false;
  }, 210);
});

//- spawning enemies

spawnEnemies();
