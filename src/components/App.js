import React from "react";

import * as types from "../actions/types";
import Button from "./Button/Button";
import Display from "./Display/Display";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div
        style={{
          textAlign: "center"
        }}
      >
        <Display />
        <div className="row">
          <Button
            text="C"
            type={types.CLEAR_CLICK}
            style={{ background: "rgb(255, 210, 205)", width: "200px" }}
          />
          <Button text="+/-" />
          <Button
            value="÷"
            text="÷"
            class="opButton"
            type={types.OPERATOR_CLICK}
          />
        </div>
        <div className="row">
          <Button value="7" text="7" type={types.NUM_CLICK} />
          <Button value="8" text="8" type={types.NUM_CLICK} />
          <Button value="9" text="9" type={types.NUM_CLICK} />
          <Button
            value="X"
            text="X"
            class="opButton"
            type={types.OPERATOR_CLICK}
          />
        </div>
        <div className="row">
          <Button value="4" text="4" type={types.NUM_CLICK} />
          <Button value="5" text="5" type={types.NUM_CLICK} />
          <Button value="6" text="6" type={types.NUM_CLICK} />
          <Button
            value="-"
            text="-"
            class="opButton"
            type={types.OPERATOR_CLICK}
          />
        </div>
        <div className="row">
          <Button value="1" text="1" type={types.NUM_CLICK} />
          <Button value="2" text="2" type={types.NUM_CLICK} />
          <Button value="3" text="3" type={types.NUM_CLICK} />
          <Button
            value="+"
            text="+"
            class="opButton"
            type={types.OPERATOR_CLICK}
          />
        </div>
        <div className="row">
          <Button
            value="0"
            text="0"
            type={types.NUM_CLICK}
            style={{ width: "200px" }}
          />
          <Button text="." type={types.NUM_CLICK} />
          <Button text="=" class="opButton" type={types.CALC_CLICK} />
        </div>
      </div>
    );
  }
}

export default App;
