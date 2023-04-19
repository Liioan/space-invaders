import { showScore } from './score.js';

const elementsToDelete = Array.from(document.body.children);

const showFinalScreen = state => {
  const playerWon = (() => {
    if (state === 'win') return true;
    if (state === 'gameOver') return false;
  })();
  elementsToDelete.forEach((element, i) => {
    setTimeout(() => {
      element.classList.add('hidden');
      setTimeout(() => {
        element.remove();
      }, 100);
    }, 200 * i);
  });
  const finalScreen = document.createElement('div');
  finalScreen.classList.add('final-screen');
  const title = document.createElement('h2');
  title.textContent = playerWon ? 'You won!' : 'You lost!';
  const scoreText = document.createElement('p');
  scoreText.textContent = `Your score: ${showScore()}`;
  const subtitle = document.createElement('p');
  subtitle.textContent = playerWon
    ? 'Congratulation!'
    : 'Better luck next time!';
  const button = document.createElement('button');
  button.textContent = 'restart';
  button.classList.add('restart');
  button.addEventListener('click', () => {
    location.reload();
  });

  finalScreen.appendChild(title);
  finalScreen.appendChild(scoreText);
  finalScreen.appendChild(subtitle);
  finalScreen.appendChild(button);

  setTimeout(() => {
    document.body.appendChild(finalScreen);
  }, 1000);
};

export default showFinalScreen;
