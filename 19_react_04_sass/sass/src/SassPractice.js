import "./styles/SassPractice.scss";
// import imgA from "./grass.png";
const SassPractice = () => {
  return (
    <div className="SassPractice">
      <div className="div1 position-absolute"></div>
      <div className="div2 position-absolute"></div>
      <div className="div3 position-absolute"></div>
      <div className="div4 position-absolute"></div>
      <div className="div5 position-absolute"></div>
      <div className="div6 position-absolute"></div>
      <div className="div7 position-absolute"></div>
      {/* process.env.PUBLIC_URL: /public \폴더 경로 */}
      <img
        className="div8 position-absolute"
        src={process.env.PUBLIC_URL + "./image/grass.png"}
        alt="grass"
      />
    </div>
  );
};

export default SassPractice;
