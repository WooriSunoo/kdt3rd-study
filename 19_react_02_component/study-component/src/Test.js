import React from "react";
class Test extends React.Component {
  render() {
    const name = "최우리";
    const my_style = {
      backgroundColor: "blue",
      fontSize: "40px",
      color: "orange",
      padding: "12px",
    };
    return <div style={my_style}>{name}</div>;
  }
}

export default Test;
