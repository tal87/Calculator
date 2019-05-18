import { combineReducers } from "redux";

import * as actionTypes from "../actions/types";

const INITIAL_STATE = {
  operator: "",
  display: "0",
  currentOperand: "op1",
  op1: { num: "0", isInteger: true },
  op2: { num: "0", isInteger: true }
};

const calcResult = state => {
  let num1 = Number(state.op1.num);
  let num2 = Number(state.op2.num);
  switch (state.operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "X":
      return num1 * num2;
    case "÷":
      return num1 / num2;
    default:
      return "";
  }
};

export default combineReducers({
  calculatorState: (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case actionTypes.NUM_CLICK:
        let currentOperand = state.currentOperand;
        let currentNum = state[currentOperand].num;
        let isInteger = state[currentOperand].isInteger;
        if (action.payload === ".") {
          // we do not allow 2 floating points
          if (!isInteger) {
            return state;
          }

          isInteger = false;
        }

        if (currentNum === "0" && action.payload !== ".") {
          currentNum = action.payload;
        } else {
          currentNum = currentNum + action.payload;
        }

        return {
          ...state,
          [currentOperand]: { isInteger: isInteger, num: currentNum },
          display: currentNum
        };
      case actionTypes.OPERATOR_CLICK:
        if (state.operator) {
          const res = calcResult(state);
          return {
            operator: action.payload,
            display: res,
            op1: { ...state.op1, num: res },
            op2: { num: "0", isInteger: true },
            currentOperand: "op2"
          };
        }

        return {
          ...state,
          operator: action.payload,
          currentOperand: state.currentOperand === "op1" ? "op2" : "op1"
        };

      case actionTypes.CALC_CLICK:
        const res = calcResult(state);
        return {
          ...INITIAL_STATE,
          op1: { num: res, isInteger: Number.isInteger(res) },
          display: res
        };
      case actionTypes.CLEAR_CLICK:
        return INITIAL_STATE;
      default:
        return state;
    }
  }
});
