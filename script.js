import movePlayer from './js/movingPlayer.js';
import spawnEnemies from './js/spawnEnemies.js';
import shoot from './js/shootingPlayer.js';
import enemyShoot from './js/shootingEnemy.js';
import showFinalScreen from './js/showFinalScreen.js';
import moveEnemies from './js/movingEnemies.js';
import { getGameMode } from './js/score.js';

let selectedGameMode;
let isGameFinished = false;
let enemyShootingInterval;
let movingInterval;

const gamemodeBtns = document.querySelectorAll('.gamemode-btn');
const startGameScreen = document.querySelector('.start-game');

export const finishGame = state => {
  showFinalScreen(state);

  clearInterval(enemyShootingInterval);
  clearInterval(movingInterval);
  window.removeEventListener('keydown', e => {
    handleKeyDown(e);
  });
};

//- starting game
const startGame = () => {
  getGameMode(selectedGameMode);

  //- moving system and shooting system (player)
  let isMoving = false;
  const handleKeyDown = e => {
    if (isGameFinished) return;
    // if (isMoving) return;
    movePlayer(e.code);
    if (e.code === 'ArrowLeft' || e.code === 'ArrowRight') {
      isMoving = true;
    }
    // setTimeout(() => {
    //   isMoving = false;
    // }, 210);

    if (!(e.code === 'ArrowUp')) return;
    if (shootingCooldown) return;
    shoot();
    shootingCooldown = true;
    selectedGameMode === 'pytel'
      ? cooldownMeter.classList.add('pytel-cooldown')
      : cooldownMeter.classList.add('cooldown-active');
    setTimeout(
      () => {
        shootingCooldown = false;
        cooldownMeter.classList.remove('pytel-cooldown');
        cooldownMeter.classList.remove('cooldown-active');
      },
      selectedGameMode === 'pytel' ? 3000 : 1500
    );
  };

  window.addEventListener('keydown', e => {
    handleKeyDown(e);
  });

  const cooldownMeter = document.querySelector('.shooting-cooldown');
  let shootingCooldown = false;

  //- shooting system (enemies)
  const shootingFrequency = (() => {
    switch (selectedGameMode) {
      case 'easy':
        return 3000;
      case 'medium':
        return 1500;
      case 'hard':
        return 1000;
      case 'pytel':
        return 1000;
      default:
        return 1000;
    }
  })();
  enemyShootingInterval = setInterval(
    () => {
      if (isGameFinished) return;
      enemyShoot();
    },
    shootingFrequency ? shootingFrequency : 2000
  );

  movingInterval = setInterval(
    () => {
      // moveEnemies();
    },
    selectedGameMode === 'pytel' ? 31000 : 16000
  );

  //- spawning enemies and player, show hidden elements
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach(element => {
    element.classList.remove('hidden');
  });
  spawnEnemies(selectedGameMode);
  gamemodeBtns[3].remove();
  startGameScreen.remove();

  // checkForPytel(selectedGameMode);
};

gamemodeBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    selectedGameMode = e.target.id;
    startGame();
  });
});
