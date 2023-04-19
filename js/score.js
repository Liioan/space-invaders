let score = 0;
let multiplier;

export const addToScore = () => {
  score = score + 100 * multiplier;
  console.log(score);
};

export const getGameMode = mode => {
  switch (mode) {
    case 'easy':
      multiplier = 0.85;
      break;
    case 'medium':
      multiplier = 1.25;
      break;
    case 'hard':
      multiplier = 1.5;
      break;
    case 'pytel':
      multiplier = 2.5;
      break;
    default:
      multiplier = 1;
      break;
  }
};

export const showScore = () => {
  return score;
};
