import { connect } from 'react-redux';
import React from 'react';

const mapStateToProps = (state) => {
  console.log('state对象', state);
  return {
    value: state.count
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
}

function Page({ value, onIncreaseClick, onDecreaseClick }) {
  return (
    <div style={{ marginLeft: 50 }}>
      <h1>{value}</h1>
      <button onClick={onIncreaseClick}>+</button>
      <button style={{ marginLeft: 50 }} onClick={onDecreaseClick}>-</button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);