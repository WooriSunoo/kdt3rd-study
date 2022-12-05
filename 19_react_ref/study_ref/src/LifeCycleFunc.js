import { useState, useEffect } from "react";

// 자식 컴포넌트
const MyComponent = (props) => {
  const { number } = props;

  useEffect(() => {
    // Mount 시점에 실행
    console.log("⭕ mount!");

    // Unmount 시점에 실행
    // : effect 함수에서 함수를 리턴할 때

    return () => {
      console.log("X unmount!");
    };
  }, []);

  //   Mount & UnMount 시점에 실행
  useEffect(() => {
    // props넘어오는 넘버는 state 라 바뀌고 있음....
    console.log("update");
  });

  return (
    <>
      <p>MyComponent {number}</p>
    </>
  );
};

// 부모 컴포넌트
const LifeCycleFunc = () => {
  const [number, setNumber] = useState(3);
  const [visible, setVisible] = useState(true);

  const changeNumberState = () => {
    setNumber(number + 1);
  };

  const changeVisibleState = () => {
    setVisible(!visible);
  };

  return (
    <>
      <h3>함수형 컴포넌트에서 LifeCycle 이해하기</h3>
      <button onClick={changeNumberState}>PLUS</button>
      <button onClick={changeVisibleState}>ON/OFF</button>
      {/* {visible && <MyComponent number={number} />} */}
    </>
  );
};

export default LifeCycleFunc;
