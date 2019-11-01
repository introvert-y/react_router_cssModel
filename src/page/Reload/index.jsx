import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { searchParser } from '../../utils/index';
import req from '../../req';

function Page({ location }) {
  req.clearAllCache();
  if (location.search) {
    const urlData = searchParser(location.search) || {};
    if (urlData.url) {
      const { url } = urlData;
      return <Redirect to={decodeURIComponent(url)} />;
    }
  }
  return <Redirect to="/" />;
}

Page.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Page;
