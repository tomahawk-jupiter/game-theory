import React, { useState } from "react";
import { connect } from "react-redux";
import "./menu.sass";

const Menu = ({ changePage, setPlayerName, setAiName, setRounds }) => {
  const [playerName, setPlayerNameLocal] = useState("Human");
  const [aiName, setAiNameLocal] = useState("Anonymous");
  const [rounds, setRoundsLocal] = useState(10);

  const startGameHandler = () => {
    changePage("game");
    setPlayerName(playerName);
    setAiName(aiName);
    setRounds(rounds);
  };

  return (
    <>
      <div className="menu-container">
        <div className="field-group">
          <div className="label">name</div>
          <input
            onChange={(e) => setPlayerNameLocal(e.target.value)}
            className="input"
            type="text"
            value={playerName}
          />
          <div className="form-description">Type your name</div>
        </div>

        <div className="field-group">
          <div className="label">opponent</div>
          <select
            onChange={(e) => setAiNameLocal(e.target.value)}
            className="input"
          >
            <option value="Anonymous">Anonymous</option>
            <option value="T-100">T-100</option>
            <option value="T-200">T-200</option>
            <option value="T-300">T-300</option>
          </select>
          <div className="form-description">
            Choose an algorithm to play against
          </div>
        </div>

        <div className="field-group">
          <div className="label">rounds</div>
          <select
            onChange={(e) => setRoundsLocal(e.target.value)}
            className="input"
            name=""
            id=""
            defaultValue="10"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="75">75</option>
            <option value="100">100</option>
          </select>
          <div className="form-description">How many rounds to play</div>
        </div>
        <button onClick={startGameHandler}>play</button>
      </div>
    </>
  );
};

// export default Menu;

// const mapStateToProps = (state) => {
//   return {
//     currentPage: state.currentPage,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: (page) => dispatch({ type: "CHANGE_PAGE", page }),
    setPlayerName: (playerName) =>
      dispatch({ type: "SET_PLAYER_NAME", playerName }),
    setAiName: (aiName) => dispatch({ type: "SET_AI_NAME", aiName }),
    setRounds: (rounds) => dispatch({ type: "SET_ROUNDS", rounds }),
  };
};

export default connect(null, mapDispatchToProps)(Menu);
