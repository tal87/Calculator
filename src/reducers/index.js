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
  let res;
  switch (state.operator) {
    case "+":
      res = num1 + num2;
      break;
    case "-":
      res = num1 - num2;
      break;
    case "X":
      res = num1 * num2;
      break;
    case "÷":
      res = num1 / num2;
      break;
    default:
      return "";
  }

  if (!Number.isInteger(res)) {
    res = Number(res.toFixed(5));
  }

  return res;
};

export default combineReducers({
  calculatorState: (state = INITIAL_STATE, action) => {
    let currentOperand = state.currentOperand;
    let currentNum = state[currentOperand].num;
    switch (action.type) {
      case actionTypes.NUM_CLICK:
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
      case actionTypes.POSITIVE_NEGATIVE_CLICK:
        currentOperand = state.currentOperand;
        currentNum = (Number(currentNum) * -1).toString();
        return {
          ...state,
          [currentOperand]: { ...state[currentOperand], num: currentNum },
          display: currentNum
        };
      default:
        return state;
    }
  }
});
