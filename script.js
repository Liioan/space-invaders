import movePlayer from './js/movingPlayer.js';
import spawnEnemies from './js/spawnEnemies.js';
import shoot from './js/shootingPlayer.js';
import enemyShoot from './js/shootingEnemy.js';

let selectedGameMode;

const gamemodeBtns = document.querySelectorAll('.gamemode-btn');
const startGameScreen = document.querySelector('.start-game');

//- starting game
const startGame = () => {
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

  //- shooting system (player)
  const cooldownMeter = document.querySelector('.shooting-cooldown');
  let shootingCooldown = false;

  window.addEventListener('keydown', e => {
    if (!(e.code === 'ArrowUp')) return;
    if (shootingCooldown) return;
    shoot();
    shootingCooldown = true;
    cooldownMeter.classList.add('cooldown-active');
    setTimeout(() => {
      shootingCooldown = false;
      cooldownMeter.classList.remove('cooldown-active');
    }, 1500);
  });

  //- shooting system (enemies)
  const shootingFrequency = (() => {
    switch (selectedGameMode) {
      case 'easy':
        return 3000;
      case 'medium':
        return 2500;
      case 'hard':
        return 2000;
      case 'pytel':
        return 1500;
    }
  })();
  setInterval(
    () => {
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
  // spawnEnemies('development');
  gamemodeBtns[3].remove();
  startGameScreen.remove();
};

gamemodeBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    selectedGameMode = e.target.id;
    startGame();
  });
});

startGame();
