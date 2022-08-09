import React from "react";
import { connect } from "react-redux";

const Result = ({
  showButtons,
  roundResult,
  incRound,
  roundsToPlay,
  currentRound,
  changePage,
}) => {
  const okButtonHandler = () => {
    showButtons();
    incRound();
    if (currentRound >= roundsToPlay) {
      changePage("result");
    }
  };

  return (
    <div className="result-container">
      <div className="label">result: {roundResult}</div>
      <button onClick={okButtonHandler}>ok</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    roundResult: state.roundResult,
    roundsToPlay: state.roundsToPlay,
    currentRound: state.currentRound,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showButtons: () => dispatch({ type: "ROUND_ACTIVE_TRUE" }),
    incRound: () => dispatch({ type: "INC_ROUND" }),
    changePage: (page) => dispatch({ type: "CHANGE_PAGE", page }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
