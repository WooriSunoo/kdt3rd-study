import PropTypes from "prop-types";

const FuncComponent = (props) => {
  //   console.log(props); // { name: 'XXX', key: value, key: value }
  const { name, students } = props; // { name: 'XXX', students: 25 }

  const teacher = "션";

  return (
    <div>
      <h1>Hi! {teacher}</h1>
      <p>여기는 Functional Component!!</p>
      <p>
        <b>{name}</b> 수업시간~!~! 학생수는 <b>{students}</b>명입니다.
      </p>
    </div>
  );
};

// FuncComponent.defaultProps = {
//   name: "얏호",
// };

FuncComponent.propTypes = {
  name: PropTypes.string,
  students: PropTypes.number.isRequired,
};

export default FuncComponent;
