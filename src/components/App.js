import React from 'react';
import styled from 'styled-components';
import style from './App.module.css'

// import logo from './logo.svg';s

const StyledDiv = styled.div`
  .red_color {
    color: red;
  }
`;

function FancyBorder(props) {
  console.log(props);
  return (
    <div style={{textAlign: 'center', margin: '0 auto'}}>
      <h2 className="title">{props.value}</h2>
      <button className={style.red_color} onClick={props.onClick}>加1</button>
      <p>{props.flag ? 'haaahahhaha' : 'fuck'}</p>
    </div>
  );
}
const listItems = [1, 2, 3, 4, 5].map((number) =>
    <li key={number}>{number}</li>
  );
class page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      value: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('触发了函数');
    this.setState({
      value: this.state.value + 1,
    })
  }
  render() {
    return (
      <StyledDiv>
        <FancyBorder flag={this.state.flag} value={this.state.value} onClick={this.handleClick}/>
        <ul className="red_color">{listItems}</ul> 
      </StyledDiv>
    )
  }
}

export default page;