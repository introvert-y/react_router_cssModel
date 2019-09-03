import React from 'react';

const Page = props => {
  const { value, onIncreaseClick, onDecreaseClick } = props
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={onIncreaseClick}>+</button>
      <button onClick={onDecreaseClick}>-</button>
    </div>
  )
}

export default Page;