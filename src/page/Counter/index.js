import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

const mapStateToProps = (state) => ({
  value: state.count,
  phone: state.phone,
});

const mapDispatchToProps = {
  onIncreaseClick: () => ({
    type: 'increase',
    count: 10,
  }),
  onDecreaseClick: () => ({
    type: 'decrease',
    count: 10,
  }),
  changeMessageCount: () => ({
    type: 'changeMessageCount',
  }),
};


function Page({
  value, phone, onIncreaseClick, onDecreaseClick, changeMessageCount,
}) {
  return (
    <div style={{ marginLeft: 50 }}>
      <h1>{value}</h1>
      <button type="button" onClick={onIncreaseClick}>+</button>
      <button type="button" style={{ marginLeft: 50 }} onClick={onDecreaseClick}>-</button>
      <button type="button" style={{ marginLeft: 50 }} onClick={changeMessageCount}>redux异步</button>
      <h2 style={{ marginTop: 20 }}>{phone}</h2>
    </div>
  );
}

Page.propTypes = {
  value: PropTypes.number.isRequired,
  phone: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired,
  onDecreaseClick: PropTypes.func.isRequired,
  changeMessageCount: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
