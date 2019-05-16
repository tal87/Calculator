import React from "react";

import "./Button.css";

const Button = props => {
  return (
    <button
      className={props.class}
      style={{ ...props.style }}
      onClick={e => props.onClick(e)}
      value={props.value}
    >
      {props.text}
    </button>
  );
};

export default Button;
