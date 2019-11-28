import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Radio, Button } from "antd";
// import { CSSTransition } from "react-transition-group";

const StyledDiv = styled.div`
  width: 500px;
  height: 300px;
  text-align: center;
`;
function Page() {
  const [color, setColor] = useState("blue");
  const [show, setShow] = useState(true);
  function changeTab(e) {
    if (color === e.target.value) {
      return;
    }
    // console.log('改变颜色', e.target.value);
    setColor(e.target.value);
  }

  return (
    <StyledDiv>
      <h2>若父组件选择了yellow按钮，子组件则不重复render,可打开控制台查看console</h2>
      <h3>
        这个过程是在子组件里做的处理，也可以在父组件里setValue的时候，如果Value等于yellow就return，也可以达到这种效果
      </h3>
      <Radio.Group value={color} onChange={changeTab}>
        <Radio.Button value="blue">blue</Radio.Button>
        <Radio.Button value="red">red</Radio.Button>
        <Radio.Button value="yellow">yellow</Radio.Button>
      </Radio.Group>
      <Son color={color} />
    </StyledDiv>
  );
}

class Son extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.color !== "yellow";
  }

  render() {
    console.log("son render");
    const { color } = this.props;
    return <div style={{ color, marginTop: 20 }}>1111</div>;
  }
}
Son.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Page;
