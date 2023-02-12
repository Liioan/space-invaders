import movePlayer from './js/movingPlayer.js';
import spawnEnemies from './js/spawnEnemies.js';
import shoot from './js/shootingPlayer.js';
import enemyShoot from './js/shootingEnemy.js';
import showFinalScreen from './js/showFinalScreen.js';

let selectedGameMode;
let isGameFinished = false;

const gamemodeBtns = document.querySelectorAll('.gamemode-btn');
const startGameScreen = document.querySelector('.start-game');

let enemyShootingInterval;

export const finishGame = state => {
  showFinalScreen(state);

  clearInterval(enemyShootingInterval);
  window.removeEventListener('keydown', e => {
    handleKeyDown(e);
  });
};

//- starting game
const startGame = () => {
  //- moving system and shooting system (player)
  let isMoving = false;
  const handleKeyDown = e => {
    if (isGameFinished) return;
    if (isMoving) return;
    movePlayer(e.code);
    isMoving = true;
    setTimeout(() => {
      isMoving = false;
    }, 210);

    if (!(e.code === 'ArrowUp')) return;
    if (shootingCooldown) return;
    shoot();
    shootingCooldown = true;
    cooldownMeter.classList.add('cooldown-active');
    setTimeout(() => {
      shootingCooldown = false;
      cooldownMeter.classList.remove('cooldown-active');
    }, 1500);
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
    }
  })();
  enemyShootingInterval = setInterval(
    () => {
      if (isGameFinished) return;
      enemyShoot();
    },
    shootingFrequency ? shootingFrequency : 2000
  );

  //- spawning enemies and player, show hidden elements
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach(element => {
    element.classList.remove('hidden');
  });
  spawnEnemies(selectedGameMode);
  gamemodeBtns[3].remove();
  startGameScreen.remove();
};

gamemodeBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    selectedGameMode = e.target.id;
    startGame();
  });
});
