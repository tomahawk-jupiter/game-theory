/**
 * Work out the outcome of a single round
 * @param {Boolean} playerChoseShare did the player choose to share this round?
 * @param {Boolean} aiChoseShare Did the AI choose to share this round?
 * @returns {String}
 */
const resultLogic = (playerChoseShare, aiChoseShare) => {
  if (playerChoseShare && aiChoseShare) {
    return "share";
  }
  if (!playerChoseShare && !aiChoseShare) {
    return "wasted";
  }
  if (playerChoseShare && !aiChoseShare) {
    return "lost";
  }
  if (!playerChoseShare && aiChoseShare) {
    return "win";
  }
};

export default resultLogic;
