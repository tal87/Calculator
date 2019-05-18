import React from "react";
import { connect } from "react-redux";

import { onButtonClick } from "../../actions";
import "./Button.css";

class Button extends React.Component {
  render() {
    let style = this.props.style;
    return (
      <button
        className={this.props.class}
        style={{ ...style }}
        onClick={e =>
          this.props.onButtonClick(this.props.type, this.props.text)
        }
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
  { onButtonClick }
)(Button);
