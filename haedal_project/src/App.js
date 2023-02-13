import "./App.css";
import React from "react";
import Ex from "./ex";

class App extends React.Component {
  render() {
    return (
      <div>
        여기서 수정해서 새로고침이 아니라 자동 저장을
        <Ex />
      </div>
    );
  }
}

export default App;
