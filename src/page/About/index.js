// 验证路由传参

import React from 'react';

function Page({location}) {
  return (<h2>About: { location.query ? location.query.name : 'No Click' }</h2>);
}

export default Page;