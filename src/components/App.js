import React from "react";

import "./App.css";
import Button from "./Button/Button";
import Display from "./Display/Display";

class App extends React.Component {
  state = {
    operator: "",
    operand1: 0,
    operand2: 0,
    currentOperand: "operand1",
    res: 0
  };

  onNumClick(e) {
    let operand = Number(e.target.value);
    if (this.state.shouldReset) {
      this.setState({
        shouldReset: false,
        operand1: operand,
        res: operand,
        operator: ""
      });
      return;
    }

    let currentOperandKey = this.state["currentOperand"];
    let currentOperand = this.state[currentOperandKey];
    currentOperand = currentOperand * 10 + operand;
    console.log(currentOperandKey);
    this.setState({ [currentOperandKey]: currentOperand, res: currentOperand });
  }

  clearButtonClicked() {
    this.setState({
      operand1: 0,
      operand2: 0,
      operator: "",
      currentOperand: "operand1",
      res: 0
    });
  }

  onOperatorClick(e) {
    let selectedOperator = e.target.value;
    if (!this.state.operator) {
      this.setState({
        operator: selectedOperator,
        currentOperand: "operand2"
      });

      return;
    }

    let res = this.calc();
    this.setState({
      operator: selectedOperator,
      currentOperand: "operand2",
      operand1: res,
      operand2: 0,
      shouldReset: false
    });
  }

  calc() {
    let operand1 = this.state.operand1;
    let operand2 = this.state.operand2;
    let operator = this.state.operator;
    let res = 0;
    switch (operator) {
      case "+":
        res = operand1 + operand2;
        break;
      case "÷":
        res = operand1 / operand2;
        break;
      case "-":
        res = operand1 - operand2;
        break;
      case "X":
        res = operand1 * operand2;
        break;
      default:
        break;
    }

    this.setState({
      currentOperand: "operand1",
      res,
      shouldReset: true
    });

    return res;
  }

  render() {
    return (
      <div
        style={{
          textAlign: "center"
        }}
      >
        <Display res={this.state.res} />
        <div className="row">
          <Button
            text="C"
            style={{ background: "rgb(255, 210, 205)", width: "200px" }}
            onClick={() => this.clearButtonClicked()}
          />
          <Button text="+/-" />
          <Button
            value="÷"
            text="÷"
            class="opButton"
            onClick={e => this.onOperatorClick(e)}
          />
        </div>
        <div className="row">
          <Button value="7" onClick={e => this.onNumClick(e)} text="7" />
          <Button value="8" onClick={e => this.onNumClick(e)} text="8" />
          <Button value="9" onClick={e => this.onNumClick(e)} text="9" />
          <Button
            value="X"
            text="X"
            class="opButton"
            onClick={e => this.onOperatorClick(e)}
          />
        </div>
        <div className="row">
          <Button value="4" onClick={e => this.onNumClick(e)} text="4" />
          <Button value="5" onClick={e => this.onNumClick(e)} text="5" />
          <Button value="6" onClick={e => this.onNumClick(e)} text="6" />
          <Button
            value="-"
            text="-"
            class="opButton"
            onClick={e => this.onOperatorClick(e)}
          />
        </div>
        <div className="row">
          <Button value="1" onClick={e => this.onNumClick(e)} text="1" />
          <Button value="2" onClick={e => this.onNumClick(e)} text="2" />
          <Button value="3" onClick={e => this.onNumClick(e)} text="3" />
          <Button
            value="+"
            text="+"
            class="opButton"
            onClick={e => this.onOperatorClick(e)}
          />
        </div>
        <div className="row">
          <Button
            value="0"
            onClick={e => this.onNumClick(e)}
            text="0"
            style={{ width: "200px" }}
          />
          <Button text="." />
          <Button text="=" class="opButton" onClick={() => this.calc()} />
        </div>
      </div>
    );
  }
}

export default App;
