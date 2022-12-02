import { useState } from "react";
const HandlerEx2 = () => {
  const [color, setColor] = useState("black");
  const [text, setText] = useState("검정");

  const onClickRed = () => {
    setText("빨간");
    setColor("red");
  };
  const onClickBlue = () => {
    setText("파란");
    setColor("blue");
  };

  return (
    <div>
      <h1 style={{ color: { setColor } }}>{() => setText(text)}색 글씨</h1>
      <button onClick={onClickRed}>빨간색</button>
      <button onClick={onClickBlue}>파란색</button>
    </div>
  );
};

export default HandlerEx2;
