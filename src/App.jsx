import React from "react";
import "./app.sass";
import Header from "./components/Header";
import SelectPage from "./pages/SelectPage";
import { connect } from "react-redux";

/*
Create a page selector function if more pages are added
this way can use if statements to choose the page
EG. <Page page={somePage} /> -> Page -> if page == "somePage" return <SomePage />
 */

const App = ({ currentPage }) => {
  return (
    <div className="main-container">
      <Header page={currentPage} />
      <SelectPage page={currentPage} />
    </div>
  );
};

// export default App;

// Redux Stuff

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeOne: (item) => dispatch({ type: "REMOVE_EQUIPMENT_ONE", item }),
//     removeLast: (item) => dispatch({ type: "REMOVE_EQUIPMENT_LAST", item }),
//     addEquipment: (item) => dispatch({ type: "ADD_EQUIPMENT", item }),
//   };
// };

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage,
  };
};

export default connect(mapStateToProps, null)(App);
