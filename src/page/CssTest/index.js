import React from 'react';
import styled from 'styled-components';
import style from './index.module.css'

// import logo from './logo.svg';s

const StyledDiv = styled.div`
  width: 300px;
  height: 300px;
  text-align: center;
  .red_color {
    color: red;
  }
`;

function FancyBorder(props) {
  console.log(props);
  return (
    <StyledDiv>
      {/* styled-components作用的 */}
      <h1 className="red_color">test</h1>
      {/* App.module.css里定义的全局样式 .title 和 局部样式 .red_color */}
      <h2 className="title">{props.value}</h2>
      <button className={style.red_color} onClick={props.onClick}>加1</button>
    </StyledDiv>
  );
}

class page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.textInput = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.focusTextInput = this.focusTextInput.bind(this);
  }
  componentDidMount() {
    this.focusTextInput();
  }

  focusTextInput() {
    // 直接使用原生 API 使 text 输入框获得焦点
    // 注意：通过 "current" 取得 DOM 节点
    this.textInput.current.focus();
  }
  handleClick() {
    this.setState((prevState) => {
      console.log('当前的count：', prevState.value);
      return {value: prevState.value + 1}
    });
  }
  render() {
    return (
      <div>
        <FancyBorder value={this.state.value} onClick={this.handleClick}/>
          <input
            type="text"
            ref={this.textInput} />
      </div>
    )
  }
}

export default page;