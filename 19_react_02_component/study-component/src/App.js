import "./App.css";
import ClassComponent from "./ClassComponent";
import FuncComponent from "./FuncComponent";
import Button from "./Button";

function App() {
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
    </div>
  );
}

export default App;
