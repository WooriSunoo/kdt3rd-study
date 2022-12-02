import React from "react";
class HandlerEx extends React.Component {
  state = {
    text: "Hello World!!",
  };
  render() {
    const { text } = this.state;

    return (
      <div>
        <div>{text}</div>
        <button onClick={() => this.setState({ text: "Goodbye World!" })}>
          클릭
        </button>
      </div>
    );
  }
}

export default HandlerEx;
