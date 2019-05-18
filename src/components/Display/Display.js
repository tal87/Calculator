import React from "react";
import { connect } from "react-redux";

import "./Display.css";

const Display = props => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#5b5b5b",
        border: "1px solid black",
        fontSize: "20px"
      }}
    >
      <div className="operator">{props.operator}</div>
      <div className="display">{props.result}</div>
    </div>
  );
};

const mapStateToProps = ({ calculatorState }) => {
  return {
    result: calculatorState.display,
    operator: calculatorState.operator
  };
};

export default connect(mapStateToProps)(Display);
