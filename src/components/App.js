import React from "react";

import Calculator from "./Calculator/Calculator";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default App;
