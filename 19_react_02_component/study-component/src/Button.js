import "./Button.css";
const Button = (props) => {
  console.log(props);
  const { link, children } = props;
  return (
    <a href={link} target="black" rel="noreferrer">
      <button className="Button">{children}버튼</button>
    </a>
  );
};

Button.defaultProps = {
  children: "네이버",
  link: "http://www.naver.com",
};

export default Button;
