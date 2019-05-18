import React from "react";
import { connect } from "react-redux";

import "./Display.css";

const Display = props => {
  return <div className="display">{props.result}</div>;
};

const mapStateToProps = ({ calculatorState }) => {
  return { result: calculatorState.display };
};

export default connect(mapStateToProps)(Display);
