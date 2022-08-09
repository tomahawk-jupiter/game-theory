import React from "react";
import { connect } from "react-redux";
import Controls from "../../components/Controls";
import Result from "../../components/Result";

// const CurrentRound = ({ roundActive }) => {
//   return <>{roundActive ? <Controls /> : <Result />}</>;
// };

const Game = ({
  changePage,
  roundActive,
  playerName,
  aiName,
  playerScore,
  aiScore,
  currentRound,
  wastedPoints,
  resetGame,
  roundsToPlay,
}) => {
  const quitHandler = () => {
    resetGame();
    changePage("menu");
  };

  return (
    <>
      <div className="top-row">
        <div className="player-container">
          <div className="label">{playerName}</div>
          <div className="value">£{playerScore}</div>
        </div>
        <div className="player-container">
          <div className="label">{aiName}</div>
          <div className="value">£{aiScore}</div>
        </div>
      </div>
      <div className="middle-row">
        <div className="round-display">
          ROUND {currentRound} of {roundsToPlay}
        </div>

        {/* <CurrentRound roundActive={roundActive} /> */}
        {roundActive ? (
          <Controls />
        ) : (
          <Result lastRound={currentRound >= roundsToPlay} />
        )}
      </div>
      <div className="bottom-row">
        <div className="label">wasted Resources</div>
        <div className="value">£{wastedPoints}</div>
      </div>
      <div className="panel-row">
        <span onClick={() => changePage("help")} className="panel-button">
          help
        </span>
        <span onClick={quitHandler} className="panel-button">
          quit
        </span>
      </div>
    </>
  );
};

// export default Game;

const mapStateToProps = (state) => {
  return {
    playerName: state.playerName,
    aiName: state.aiName,
    playerScore: state.playerScore,
    aiScore: state.aiScore,
    roundActive: state.roundActive,
    currentRound: state.currentRound,
    roundsToPlay: state.roundsToPlay,
    wastedPoints: state.wastedPoints,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: (page) => dispatch({ type: "CHANGE_PAGE", page }),
    showButtons: () => dispatch({ type: "ROUND_ACTIVE_TRUE" }),
    showResult: () => dispatch({ type: "ROUND_ACTIVE_FALSE" }),
    resetGame: () => dispatch({ type: "RESET_GAME" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
