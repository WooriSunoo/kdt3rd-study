import "./App.css";
import ClassComponent from "./ClassComponent";
import FuncComponent from "./FuncComponent";
import Button from "./Button";
import Test from "./Test";
import Test2 from "./Test2";
import PropsPractice from "./PropsPractice";
import PropsPractice2 from "./PropsPractice2";

function App() {
  const my_func = () => {
    console.log("콘솔띄우기 성공!");
  };
  return (
    <div className="App">
      <ClassComponent />
      <ClassComponent></ClassComponent>
      <ClassComponent name="KDT3기" students={100} />
      <hr />
      {/* <FuncComponent />
      <FuncComponent name="KDT3기" students={25} />
      <hr /> */}

      <Button link="http://www.google.com">구글</Button>
      <Button link="http://www.daum.com">다음</Button>
      <Button></Button>
      <Test></Test>
      <Test2></Test2>
      <PropsPractice></PropsPractice>
      <PropsPractice2
        text="App 컨포넌트에서 넘겨준 text props입니다."
        valid={my_func}
      ></PropsPractice2>
    </div>
  );
}

export default App;
