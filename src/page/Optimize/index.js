import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Radio, Button,
} from 'antd';
import { CSSTransition } from 'react-transition-group';


const StyledDiv = styled.div`
  width: 500px;
  height: 300px;
  text-align: center;
  .line {
    height: 50px;
    line-height: 50px;
  }
  .line-height button{
    background-color: black;
    color: #fff;
  }
  .fade-enter{
    opacity: 0;
}
.fade-enter-active{
    opacity: 1;
    transition: opacity 2000ms;

}
.fade-enter-done{
    opacity: 1;
}
.fade-exit{
    opacity: 1;
}
.fade-exit-active{
    opacity: 0;
    transition: opacity 2000ms;

}
.fade-exit-done{
    opacity: 0;
}
`;
function Page() {
  const [color, setColor] = useState('blue');
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
      <h4>若父组件选择了blue按钮，子组件则不重复render</h4>
      <Radio.Group value={color} onChange={changeTab}>
        <Radio.Button value="blue">blue</Radio.Button>
        <Radio.Button value="red">red</Radio.Button>
        <Radio.Button value="yellow">yellow</Radio.Button>
      </Radio.Group>
      <Button style={{ marginLeft: 40 }} type="primary" onClick={() => setShow(!show)}>toggleShow</Button>
      <CSSTransition
        in={show} // 用于判断是否出现的状态
        timeout={800} // 动画持续时间
        classNames="fade" // className值，防止重复
        unmountOnExit
      >
        <Son color={color} />
      </CSSTransition>
    </StyledDiv>
  );
}

class Son extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.color !== 'yellow';
  }

  render() {
    console.log('son render');
    const { color } = this.props;
    return (
      <div style={{ color, marginTop: 20 }}>1111</div>
    );
  }
}
Son.propTypes = {
  color: PropTypes.string.isRequired,
};


export default Page;
