import React from "react";
import { connect } from "react-redux";
import "./help.sass";

const Help = ({ changePage }) => {
  return (
    <div className="help-container">
      <div className="label">how to play</div>
      <p>
        There is a prize pool of £100 per round and both players choose whether
        to share or steal.
      </p>
      <p>
        If both players share, the prize is split evenly and both receive £50.
      </p>
      <p>
        If one player shares and the other steals, the player that steals
        receives the whole prize of £100 and the other £0.
      </p>
      <p>If both players steal, both receive nothing and the prize is lost.</p>
      <p>
        You can play against different algorithms that will use different
        strategies. They cannot see your current move, only your previous ones.
      </p>
      <button onClick={() => changePage("game")}>ok</button>
    </div>
  );
};

// export default Help;

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: (page) => dispatch({ type: "CHANGE_PAGE", page }),
  };
};

export default connect(null, mapDispatchToProps)(Help);
