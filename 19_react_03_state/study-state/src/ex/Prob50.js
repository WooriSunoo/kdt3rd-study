import { useState } from "react";

const Prob50 = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <h1>{visible ? "안녕하세요" : ""}</h1>
      <button onclick={() => setVisible(e)}>{visible ? "사라져라" : ""}</button>
    </div>
  );
};
export default Prob50;
