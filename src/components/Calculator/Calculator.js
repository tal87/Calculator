import React from "react";

import * as types from "../../actions/types";
import Button from "../Button/Button";
import Display from "../Display/Display";

const Calculator = () => {
  //boxShadow: "10px 10px #fff"
  return (
    <div
      style={{
        width: "300px",
        boxShadow: "10px 10px 10px 3px rgb(50, 50, 50)"
      }}
    >
      <Display />
      <div className="row">
        <Button
          text="C"
          type={types.CLEAR_CLICK}
          style={{
            background: "#730000",
            width: "150px",
            color: "#C6C6C6",
            borderLeft: "1px solid #000"
          }}
        />
        <Button text="+/-" type={types.POSITIVE_NEGATIVE_CLICK} />
        <Button
          value="÷"
          text="÷"
          class="opButton"
          type={types.OPERATOR_CLICK}
        />
      </div>
      <div className="row">
        <Button value="7" text="7" type={types.NUM_CLICK} class="number" />
        <Button value="8" text="8" type={types.NUM_CLICK} class="number" />
        <Button value="9" text="9" type={types.NUM_CLICK} class="number" />
        <Button
          value="x"
          text="x"
          class="opButton"
          type={types.OPERATOR_CLICK}
        />
      </div>
      <div className="row">
        <Button value="4" text="4" type={types.NUM_CLICK} class="number" />
        <Button value="5" text="5" type={types.NUM_CLICK} class="number" />
        <Button value="6" text="6" type={types.NUM_CLICK} class="number" />
        <Button
          value="-"
          text="-"
          class="opButton"
          type={types.OPERATOR_CLICK}
        />
      </div>
      <div className="row">
        <Button value="1" text="1" type={types.NUM_CLICK} class="number" />
        <Button value="2" text="2" type={types.NUM_CLICK} class="number" />
        <Button value="3" text="3" type={types.NUM_CLICK} class="number" />
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
          style={{ width: "150px" }}
          class="number"
        />
        <Button text="." type={types.NUM_CLICK} class="number" />
        <Button
          text="="
          class="opButton"
          type={types.CALC_CLICK}
          style={{ backgroundColor: "#F97B38", color: "black" }}
        />
      </div>
    </div>
  );
};

export default Calculator;
