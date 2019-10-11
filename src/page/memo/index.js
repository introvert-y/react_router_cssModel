
import React from 'react';

function MyComponent({name}) {
  /* 使用 props 渲染 */
  console.log('子组件渲染了');
  return (
    <div>
      {name}
    </div>
  )
}
function areEqual(prevProps, nextProps) {
  //true则不重新渲染， 相反则重新渲染
  return true;
}
export default React.memo(MyComponent, areEqual);
