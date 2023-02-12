const enemiesWrapper = document.querySelector('.enemies-wrapper');
const player = document.querySelector('.player');

const checkForPytel = selectedMode => {
  if (selectedMode === 'pytel') return true;
};

const spawnEnemies = (gameMode = 'easy') => {
  const spawn = amount => {
    const pytel = checkForPytel(gameMode);
    if (pytel) {
      player.classList.add('pytel');
    }
    for (let i = 1; i <= amount; i++) {
      for (let j = 1; j <= 10; j++) {
        setTimeout(() => {
          // enemiesWrapper.innerHTML += `<div class='enemy' id='${i}'></div>`;
          const newEnemy = document.createElement('div');
          newEnemy.classList.add('enemy');
          if (pytel) {
            newEnemy.classList.add('czarnojan');
          }
          newEnemy.id = `e${Math.floor(Math.random() * 1000)}`;
          newEnemy.style.gridColumn = `${j}/${j + 1}`;
          newEnemy.style.gridRow = `${i}/${i + 1}`;
          enemiesWrapper.appendChild(newEnemy);
        }, 100 * j * i);
      }
    }
  };

  switch (gameMode) {
    case 'easy':
      spawn(2);
      return;
    case 'medium':
      spawn(3);
      return;
    case 'hard':
      spawn(4);
      return;
    case 'pytel':
      spawn(6);
      return;
    case 'development':
      spawn(1);
      return;
  }
};

export default spawnEnemies;
