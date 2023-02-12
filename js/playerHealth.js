const heartsWrapper = document.querySelector('.hearts');
let playerHealth = 3;

export const reduceHealth = () => {
  heartsWrapper.innerHTML = '';
  playerHealth--;
  if (!playerHealth) return;
  for (let i = 0; i < playerHealth; i++) {
    heartsWrapper.innerHTML += `<img src='./assets/heart.png'>`;
  }
};
