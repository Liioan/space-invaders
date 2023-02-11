let player = document.querySelector('.player');
let playerCoords = player.getBoundingClientRect();
const startingCoords = player.getBoundingClientRect();

const movePlayer = key => {
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

export default movePlayer;
