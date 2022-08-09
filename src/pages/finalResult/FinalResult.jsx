import React from "react";
import { connect } from "react-redux";
import "./finalResult.sass";

const FinalResult = ({
  playerName,
  aiName,
  playerScore,
  aiScore,
  wastedPoints,
  changePage,
  resetGame,
}) => {
  let difference = 0;
  let text = "draw";

  const results = () => {
    if (playerScore > aiScore) {
      difference = playerScore - aiScore;
      text = "won";
    }
    if (playerScore < aiScore) {
      difference = aiScore - playerScore;
      text = "lost";
    }
    // return { difference, text };
  };
  results();

  const handleEndGame = () => {
    resetGame();
    changePage("menu");
  };
  return (
    <div className="result-page">
      <h1>{text}</h1>
      {text === "draw" ? (
        <div className="result-text">You were evenly matched</div>
      ) : (
        <div className="result-text">
          You {text} by £{difference}
        </div>
      )}
      <div className="result-text">£{wastedPoints} was wasted!</div>
      <button onClick={handleEndGame}>menu</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    playerName: state.playerName,
    aiName: state.aiName,
    playerScore: state.playerScore,
    aiScore: state.aiScore,
    wastedPoints: state.wastedPoints,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: (page) => dispatch({ type: "CHANGE_PAGE", page }),
    showResult: () => dispatch({ type: "ROUND_ACTIVE_FALSE" }),
    resetGame: () => dispatch({ type: "RESET_GAME" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FinalResult);
