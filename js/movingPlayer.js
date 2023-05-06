let player = document.querySelector('.player');
let playerCoords = player.getBoundingClientRect();
const startingCoords = player.getBoundingClientRect();

let currentColumn = 1;

const movePlayer = key => {
  playerCoords = player.getBoundingClientRect();
  switch (key) {
    case 'ArrowLeft':
      // if (playerCoords.left - 100 < startingCoords.left) {
      //   player.style.left = `${startingCoords}px`;
      //   return;
      // } else {
      //   player.style.left = `${Math.floor(playerCoords.left - 100)}px`;
      // }
      if (currentColumn > 1) {
        currentColumn -= 1;
        player.style.gridColumn = `
          ${currentColumn}/${currentColumn + 1}
        `;
      } else return;
      break;
    case 'ArrowRight':
      // if (playerCoords.left + 100 > startingCoords.left + 900) {
      //   player.style.left = `${startingCoords + 1000}px`;
      //   return;
      // } else {
      //   player.style.left = `${Math.floor(playerCoords.left + 100)}px`;
      // }
      if (currentColumn < 10) {
        currentColumn += 1;
        player.style.gridColumn = `
          ${currentColumn}/${currentColumn + 1}
        `;
      } else return;
      break;
  }
};

export default movePlayer;

console.log(player);
