import React from "react";
import FinalResult from "./finalResult/FinalResult";
import Game from "./game/Game";
import Help from "./help/Help";
import Menu from "./menu/Menu";

const SelectPage = ({ page }) => {
  if (page === "menu") {
    return <Menu />;
  }

  if (page === "game") {
    return <Game />;
  }

  if (page === "help") {
    return <Help />;
  }

  if (page == "result") {
    return <FinalResult />;
  }
};

export default SelectPage;
