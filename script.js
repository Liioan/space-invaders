let player = document.querySelector('.player');
const startingCoords = player.getBoundingClientRect();

let isMoving = false;

const movePlayer = key => {
  let playerCoords = player.getBoundingClientRect();
  playerCoords = player.getBoundingClientRect();
  switch (key) {
    case 'ArrowLeft':
      if (playerCoords.left - 100 < startingCoords.left) {
        player.style.left = `${startingCoords}px`;
        return;
      } else {
        player.style.left = `${Math.floor(playerCoords.left - 100)}px`;
      }
      return;
    case 'ArrowRight':
      if (playerCoords.left + 100 > startingCoords.left + 900) {
        player.style.left = `${startingCoords + 1000}px`;
        return;
      } else {
        player.style.left = `${Math.floor(playerCoords.left + 100)}px`;
      }
      return;
  }
};

window.addEventListener('keydown', e => {
  if (isMoving) return;
  movePlayer(e.code);
  isMoving = true;
  setTimeout(() => {
    isMoving = false;
  }, 210);
});
