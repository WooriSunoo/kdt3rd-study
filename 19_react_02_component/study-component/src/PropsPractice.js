// import PropTypes from "prop-types";

const PropsPractice = (props) => {
  const { food } = props;
  return <div>제가 좋아는 음식은 {food} 입니다.</div>;
};

PropsPractice.defaultProps = {
  food: "김밥",
};

export default PropsPractice;
