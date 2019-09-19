import React from "react";
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    num: state.count,
  };
}

function Page({ num }) {
  return (<h1>{num}</h1>);
}

export default connect(mapStateToProps)(Page);
