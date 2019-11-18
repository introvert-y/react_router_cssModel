import React from 'react';
import styled from 'styled-components';
import style from './index.module.css';

const StyledDiv = styled.div`
  width: 300px;
  height: 300px;
  text-align: center;
  .blue_color {
    color: red;
  }
`;

function Page() {
  return (
    <StyledDiv>
      <h1 className="blue_color">styled-components的样式</h1>
      <h2 className={style.pink_color}>App.module.css里定义的样式</h2>
      <h3 className="title">App.module.css里定义的全局样式</h3>
    </StyledDiv>
  );
}

export default Page;
