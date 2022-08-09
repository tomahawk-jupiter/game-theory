import { initialState } from "../initialState";

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_PAGE":
      return {
        ...state,
        currentPage: action.page,
      };
    case "SET_PLAYER_NAME":
      return {
        ...state,
        playerName: action.playerName,
      };
    case "SET_AI_NAME":
      return {
        ...state,
        aiName: action.aiName,
      };
    case "SET_ROUNDS":
      return {
        ...state,
        roundsToPlay: action.rounds,
      };
    case "INC_ROUND":
      return {
        ...state,
        currentRound: (state.currentRound += 1),
      };
    case "ROUND_ACTIVE_TRUE":
      return {
        ...state,
        roundActive: true,
      };
    case "ROUND_ACTIVE_FALSE":
      return {
        ...state,
        roundActive: false,
      };
    case "ADD_PLAYER_POINTS":
      return {
        ...state,
        playerScore: state.playerScore + action.playerPoints,
      };
    case "ADD_AI_POINTS":
      return {
        ...state,
        aiScore: state.aiScore + action.aiPoints,
      };
    case "ADD_WASTED_POINTS":
      return {
        ...state,
        wastedPoints: state.wastedPoints + action.wastedPoints,
      };
    case "ADD_ROUND_RESULT":
      return {
        ...state,
        previousPlayerChoices: [
          ...state.previousPlayerChoices,
          action.playerChoice,
        ],
      };
    case "SET_ROUND_RESULT":
      return {
        ...state,
        roundResult: action.roundResult,
      };
    case "RESET_GAME":
      return {
        ...state,
        currentRound: 1,
        roundActive: true,
        playerScore: 0,
        aiScore: 0,
        wastedPoints: 0,
        previousPlayerChoices: [],
        roundResult: "",
      };
    default:
      return state;
  }
};
