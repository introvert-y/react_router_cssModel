import { connect } from 'react-redux';
import React from 'react';

const mapStateToProps = (state) => {
  // console.log('state对象', state);
  return {
    value: state.count,
    phone: state.phone,
  }
}
 
const mapDispatchToProps = {
  onIncreaseClick: () => {
    return {
      type: 'increase',
      count: 10,
    }
  },
  onDecreaseClick: () => {
    return {
      type: 'decrease',
      count: 10,
    }
  },
  changeMessageCount: () => {
    return {
      type: 'changeMessageCount',
    }
  },
}

function Page({ value, phone, onIncreaseClick, onDecreaseClick, changeMessageCount }) {
  return (
    <div style={{ marginLeft: 50 }}>
      <h1>{value}</h1>
      <button onClick={onIncreaseClick}>+</button>
      <button style={{ marginLeft: 50 }} onClick={onDecreaseClick}>-</button>
      <button style={{ marginLeft: 50 }} onClick={changeMessageCount}>redux异步</button>
      <h2 style={{ marginTop: 20 }}>{phone}</h2>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);