import React, { useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group'


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
  function changeTab(index) {
    if (color === index) {
      return;
    }
    console.log('改变颜色', index);
    setColor(index);
  };
  return (
    <StyledDiv>
      <h4>若父组件选择了blue按钮，子组件则不重复render</h4>
      <div className={`line ${color === 'blue' && 'line-height'}`}>
        <button onClick={() => changeTab('blue')}>blue</button>
      </div>
      <div className={`line ${color === 'red' && 'line-height'}`}>
        <button onClick={() => changeTab('red')}>red</button>
      </div>
      <div className={`line ${color === 'black' && 'line-height'}`}>
        <button onClick={() => changeTab('black')}>black</button>
      </div>
      <div className="line">
        <button onClick={() => setShow(!show)}>toggleShow</button>
      </div>
      <CSSTransition 
          in={show}   //用于判断是否出现的状态
          timeout={800}           //动画持续时间
          classNames="fade"   //className值，防止重复
          unmountOnExit
      >
         <Son color={color} />
      </CSSTransition>
    </StyledDiv>
  )
}

class Son extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  };
  shouldComponentUpdate(nextProps,nextState){
    if(nextProps.color !== 'blue'){
        return true
    }else{
        return false
    }
  }
  render() {
    console.log('来咯来咯');
    return (
      <div style={{ color: this.props.color }}>1111</div>
    )
  }
}
export default Page;
