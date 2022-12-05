import React from "react";
import PropTypes from "prop-types";

// import ButtonP from ".ButtonP";
class PropsPractice2 extends React.Component {
  render() {
    const { text, valid } = this.props; //{ name: 'XXX', key: value, key: value }

    return (
      <>
        <div>{text}</div>
        <br />
        <button onClick={valid}>콘솔 메세지</button>
      </>
    );
  }
}
PropsPractice2.propTypes = {
  text: PropTypes.string.isRequired,
};

PropsPractice2.defaultProps = {
  text: "이건 기본 text props 입니다",
};

export default PropsPractice2;
