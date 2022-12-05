import "./Button.css";
const Button = (props) => {
  console.log(props);
  const { valid } = props;
  return (
    <a href={link} target="black" rel="noreferrer">
      <button className="Button">{valid}버튼</button>
    </a>
  );
};

Button.defaultProps = {
  children: "네이버",
  link: "http://www.naver.com",
};

export default Button;
