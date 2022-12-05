import coding from "./sample2.png";
const Test2 = () => {
  const style = {
    color: "orange",
    fontSize: "40px",
    marginTop: "20px",
  };
  return (
    <div style={style}>
      <h2>안녕하세요</h2>
      <img src={coding} alt="코딩사진" width={200} />
    </div>
  );
};

export default Test2;
