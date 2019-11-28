import React, { useState } from "react";
import Memo from "../memo/index";

function Page() {
  const [name, setName] = useState("GAY");
  return (
    <div style={{ marginLeft: 50, width: 500 }}>
      <h2>
        “浅比较”的模式来检查 props 和 state
        中所有的字段，变化则渲染，否则复用之前的渲染。也可通过shouldComponentUpdate手动实现
      </h2>
      <p>{name}</p>
      <button type="button" onClick={() => setName("Anny")}>
        changeName to Anny
      </button>
      <button type="button" onClick={() => setName("Den")} style={{ marginLeft: 50 }}>
        changeName to Den
      </button>
      <br />
      <br />
      <Memo name={name} />
    </div>
  );
}

export default Page;
