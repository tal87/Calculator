import React from "react";

import Calculator from "./Calculator/Calculator";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh"
        }}
      >
        <Calculator />
      </div>
    );
  }
}

export default App;
