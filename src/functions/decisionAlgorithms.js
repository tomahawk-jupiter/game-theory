// Maybe use a switch statement to decide what algorithm to use?

/**
 * Determine game choices for AI player
 * @param {Array} previousPlayerChoices All previous player moves
 * @param {String} aiName The selected AI player name
 * @return {Boolean} The next choice for the AI player to make
 */

const aiDecision = (previousPlayerChoices, aiName) => {
  const aiArray = ["T-100", "T-200", "T-300"];
  const randomIndex = Math.floor(Math.random() * 3);
  let ai = aiName;

  if (aiName === "Anonymous") {
    ai = aiArray[randomIndex];
  }

  switch (ai) {
    case "T-100":
      return titForTat(previousPlayerChoices);
    case "T-200":
      return forgivingTitForTat(previousPlayerChoices);
    case "T-300":
      return smartOpposite(previousPlayerChoices);
    default:
      return forgivingTitForTat(previousPlayerChoices);
  }
};

const titForTat = (previousPlayerChoices) => {
  // Start off sharing
  let nextChoice = true;
  // After first round copy player choices
  if (previousPlayerChoices.length > 0) {
    const lastIndex = previousPlayerChoices.length - 1;
    nextChoice = previousPlayerChoices[lastIndex]; // same as players last choice
  }
  return nextChoice;
};

const forgivingTitForTat = (previousPlayerChoices) => {
  const lastIndex = previousPlayerChoices.length - 1;
  const playerLastChoice = previousPlayerChoices[lastIndex];
  const playersSecondLastChoice = previousPlayerChoices[lastIndex - 1];
  const playersThirdLastChoice = previousPlayerChoices[lastIndex - 2];

  // Last 3 player choices were steal so forgive and choose share
  if (
    previousPlayerChoices.length > 3 &&
    !playerLastChoice &&
    !playersSecondLastChoice &&
    !playersThirdLastChoice
  ) {
    return true;
  }

  // Only steal if player stole last round
  if (previousPlayerChoices.length > 0) {
    return playerLastChoice;
  }
  return true;
};

// Clever opposite
// If player keeps stealing, ai will start stealing until player starts sharing
const smartOpposite = (previousPlayerChoices) => {
  const lastIndex = previousPlayerChoices.length - 1;
  const playerLastChoice = previousPlayerChoices[lastIndex];
  const playersSecondLastChoice = previousPlayerChoices[lastIndex - 1];
  // const playersThirdLastChoice = previousPlayerChoices[lastIndex - 2];

  // Last 2 player choices were steal so don't keep sharing
  if (
    previousPlayerChoices.length > 2 &&
    !playerLastChoice &&
    !playersSecondLastChoice
  ) {
    return false;
  }

  // Do opposite to players last choice
  if (previousPlayerChoices > 0) {
    return !playerLastChoice;
  }
  return true;
};

module.exports = aiDecision;
