import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastClicked: "",
    };
  }

  handleClick = (button) => {
    this.setState({ lastClicked: button});
  };

  render() {
    const buttons = Array.from({ length: 20 }, (_, i) => i + 1);

    return (
      <div className="phone">
        <div className="screen">
          <div className="statusBar">Status Bar</div>
          <div className="buttonGrid">
            {buttons.map((button, i) => (
              <button className={ button === this.state.lastClicked ? "activeButton" : "button"} key={i} onClick={() => this.handleClick(button)}>
                {button}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
