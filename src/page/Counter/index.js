import { connect } from 'react-redux';
import React from 'react';

const mapStateToProps = (state) => {
  return {
    value: state.count
  }
}
 
const mapDispatchToProps = {
  onIncreaseClick: () => {
    return {
      type: 'increase'
    }
  },
  onDecreaseClick: () => {
    return {
      type: 'decrease'
    }
  },
}

function Page({ value, onIncreaseClick, onDecreaseClick }) {
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={onIncreaseClick}>+</button>
      <button onClick={onDecreaseClick}>-</button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);