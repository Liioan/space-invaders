const enemiesWrapper = document.querySelector('.enemiesWrapper');

const spawnEnemies = (gameMode = 'easy') => {
  const spawn = amount => {
    for (let i = 0; i < amount; i++) {
      setTimeout(() => {
        enemiesWrapper.innerHTML += `<div class='enemy'/>`;
      }, 100 * i);
    }
  };

  switch (gameMode) {
    case 'easy':
      spawn(20);
      return;
    case 'medium':
      spawn(30);
      return;
    case 'hard':
      spawn(40);
      return;
    case 'pytel':
      spawn(50);
      return;
  }
};

export default spawnEnemies;
