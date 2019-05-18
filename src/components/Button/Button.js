import React from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";
import "./Button.css";

class Button extends React.Component {
  onClick() {
    if (this.props.type === "operator") {
      this.props.onOperatorClick(this.props.text);
    }
  }

  render() {
    let style = this.props.style;
    return (
      <button
        className={this.props.class}
        style={{ ...style }}
        onClick={e => this.onClick(e)}
        value={this.props.value}
        type={this.props.type}
      >
        {this.props.text}
      </button>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  actions
)(Button);
