import React, { useState, useMemo } from "react";

function Page() {
  const [count, setCount] = useState(1);
  const expensive = useMemo(() => {
    console.log("compute");
    let sum = 0;
    for (let i = 0; i < count * 100; i += 1) {
      sum += i;
    }
    return sum;
  }, [count]);

  return (
    <div style={{ marginLeft: 40, width: 500 }}>
      <h2>类似vue的计算属性，函数只依赖count的变化</h2>
      <h3>
        记住，传入 useMemo 的函数会在渲染期间执行。请不要在这个函数内部执行与渲染无关的操作，诸如副作用这类的操作属于
        useEffect 的适用范畴，而不是 useMemo。 如果没有提供依赖项数组，useMemo 在每次渲染时都会计算新的值.
        <br />
        useCallback(fn, deps) 相当于 useMemo(() =&gt; fn, deps)
      </h3>
      <h4>
        {count}-{expensive}
      </h4>
      <div>
        <button type="button" onClick={() => setCount(count + 1)}>
          add
        </button>
      </div>
    </div>
  );
}

export default Page;
