import React from "react";
import { connect } from "react-redux";
import aiDecision from "../functions/decisionAlgorithms";
import resultLogic from "../functions/resultLogic";

const Controls = ({
  showResult,
  previousPlayerChoices,
  addToPreviousPlayerChoices,
  setRoundResult,
  addPlayerPoints,
  addAiPoints,
  addWastedPoints,
  aiName,
}) => {
  // Determine the result of the current round
  const gameRoundResultHandler = (playerChoice) => {
    // const aiChoice = titForTat(previousPlayerChoices);

    const aiChoice = aiDecision(previousPlayerChoices, aiName);

    const roundResult = resultLogic(playerChoice, aiChoice);

    // Use round result to distribute points
    switch (roundResult) {
      case "share":
        // update player and ai with half
        addPlayerPoints(50);
        addAiPoints(50);
        break;
      case "wasted":
        // update wasted score with whole pot
        addWastedPoints(100);
        break;
      case "win":
        // update player score with whole pot
        addPlayerPoints(100);
        break;
      case "lost":
        // update ai score with whole pot
        addAiPoints(100);
        break;
      default:
        break;
    }

    // Update some state variables
    addToPreviousPlayerChoices(playerChoice);
    setRoundResult(roundResult);
    showResult(); // Changes state to show result component
  };

  return (
    <div className="control-container">
      <div className="label">pot: £100</div>
      <button onClick={() => gameRoundResultHandler(true)}>share</button>
      <button onClick={() => gameRoundResultHandler(false)}>steal</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    previousPlayerChoices: state.previousPlayerChoices,
    aiName: state.aiName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showResult: () => dispatch({ type: "ROUND_ACTIVE_FALSE" }),
    addToPreviousPlayerChoices: (playerChoice) =>
      dispatch({ type: "ADD_ROUND_RESULT", playerChoice }),
    setRoundResult: (roundResult) =>
      dispatch({ type: "SET_ROUND_RESULT", roundResult }),
    addPlayerPoints: (playerPoints) =>
      dispatch({ type: "ADD_PLAYER_POINTS", playerPoints }),
    addAiPoints: (aiPoints) => dispatch({ type: "ADD_AI_POINTS", aiPoints }),
    addWastedPoints: (wastedPoints) =>
      dispatch({ type: "ADD_WASTED_POINTS", wastedPoints }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
