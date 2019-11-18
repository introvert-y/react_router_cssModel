
import React from 'react';
import PropTypes from 'prop-types';

function MyComponent({ name }) {
  /* 使用 props 渲染 */
  console.log('子组件渲染了');
  return (
    <div>
      {name}
    </div>
  );
}
function areEqual() {
  // areEqual(prevProps, nextProps)
  // true则不重新渲染， 相反则重新渲染
  return true;
}

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default React.memo(MyComponent, areEqual);
