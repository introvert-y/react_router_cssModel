import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";

const mapStateToProps = state => ({
  value: state.count
});

const mapDispatchToProps = {
  onIncreaseClick: () => ({
    type: "increase",
    count: 10
  }),
  onDecreaseClick: () => ({
    type: "decrease",
    count: 10
  }),
  changeName: () => ({
    type: "changeName"
  })
};

function Page({ onIncreaseClick, onDecreaseClick, changeName }) {
  return (
    <div style={{ marginLeft: 50 }}>
      {/* <h1>{value}</h1> */}
      <p>
        react-redux的异步流实现，是通过拦截派发给reducer的事件实现的，例如派发了一个改变全局状态中name的变化，同时循环执行其他操作
      </p>
      <button type="button" onClick={onIncreaseClick}>
        +
      </button>
      <button type="button" style={{ marginLeft: 50 }} onClick={onDecreaseClick}>
        -
      </button>
      <button type="button" style={{ marginLeft: 50 }} onClick={changeName}>
        异步流改变全局状态中的名字，延迟5秒
      </button>
    </div>
  );
}

Page.propTypes = {
  onIncreaseClick: PropTypes.func.isRequired,
  onDecreaseClick: PropTypes.func.isRequired,
  changeName: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
