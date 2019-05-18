import * as actionTypes from "./types";

const onOperatorClick = operator => {
  return {
    type: actionTypes.OPERATOR_CLICK,
    payload: operator
  };
};

export { onOperatorClick };
