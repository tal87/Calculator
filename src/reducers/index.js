import { combineReducers } from "redux";

import * as actionTypes from "../actions/types";

export default combineReducers({
  operator: (state = "", action) => {
    switch (action.type) {
      case actionTypes.OPERATOR_CLICK:
        return action.payload;
      default:
        return state;
    }
  }
});
