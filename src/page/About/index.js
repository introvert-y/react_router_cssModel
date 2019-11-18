// 验证路由传参

import React from 'react';
import PropTypes from 'prop-types';

function Page({ location }) {
  return (
    <h2>
      About:
      { location.query ? location.query.name : 'No Click' }
    </h2>
  );
}

Page.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Page;
