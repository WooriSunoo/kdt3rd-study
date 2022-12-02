import React from "react";

class StatePractice extends React.Component {
  state = {
    number: 0,
  };
  render() {
    const { number } = this.state; //{number:0}

    return (
      <>
        <div>{number}</div>
        <button onClick={() => this.setState({ number: number + 2 })}>
          +2
        </button>
        <button onClick={() => this.setState({ number: number - 1 })}>
          -1
        </button>
      </>
    );
  }
}

export default StatePractice;
