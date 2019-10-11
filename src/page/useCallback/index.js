import React, { useCallback, useState } from 'react';

class Child extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.flag !== this.props.flag;
  }

  render() {
    console.log('Child render');
    return <div>Child Count: {this.props.count}</div>;
  }
}

const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const [selfCount, setSelfCount] = useState(100);

  const memoizedCallback = useCallback(() => {
    console.log('count change', count);
  }, [count]);

  return (
    <div style={{ marginLeft: 40 }}>
      <h2>useCallback缓存函数</h2>
      <Child count={count} flag={memoizedCallback} />
      <p>self Count：{selfCount}</p>
      <button onClick={() => setCount(count + 1)}>child count add</button><br/><br/>
      <button onClick={() => setSelfCount(selfCount + 1)}>self count add</button><br/><br/>
      <button onClick={() => memoizedCallback()}>callback click</button>
    </div>
  )
}
export default UseCallBack;