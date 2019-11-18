import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    num: state.count,
  };
}

function Page({ num }) {
  return (<h1>{num}</h1>);
}

Page.propTypes = {
  num: PropTypes.number.isRequired,
};
export default connect(mapStateToProps)(Page);
