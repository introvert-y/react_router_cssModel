
import React, { useState } from 'react';
import Memo from '../memo/index';

function Page() {
  const [name, setName] = useState('Ming');
  const count = 10;
  return (
    <div style={{ marginLeft: 50 }}>
      <h2>子组件在任何情况下都不重新渲染</h2>
      <p>{name}</p>
      <button type="button" onClick={() => setName('Ming')}>Ming</button>
      <br />
      <br />
      <button type="button" onClick={() => setName('Anny')}>Anny</button>
      <Memo name={count} />
    </div>
  );
}

export default Page;
