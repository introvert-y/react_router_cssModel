// 如何实现一个react-router路由拦截（导航守卫） https://juejin.im/post/5c31aede6fb9a04a0d570107

import React from "react";
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import Home from '../page/CssTest/index'
// import About from '../page/About/index'

import Counter from '../page/Counter/index'
import Single from '../page/Single/index'
import Optimize from '../page/Optimize/index'
import EchartBox from '../page/echartBox/index'
import ChinaMap from '../page/chinaMap/index'
import UseMemo from '../page/useMemo/index'
import UseCallback from '../page/useCallback/index'

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">css避免全局渲染方案</Link>
      </li>
      <li>
        <Link to={{ pathname:"/about" , query: { name: 'Anny' } }}>路由query传单个属性</Link>
      </li>
      <li>
        <Link to={`/practice?data=${encodeURIComponent(JSON.stringify({
          name: 'IG',
          sex: 'man',
        }))}`} >
          路由query传一个对象
        </Link>
      </li>
      <li>
        <Link to={{ pathname:"/test" , params: { name: 'Ming' } }}>路由params传参</Link>
      </li>
      <li>
        <Link to="/queryChildren">嵌套路由</Link>
      </li>
      <li>
        <Link to="/counter">全局状态共享计数器操作</Link>
      </li>
      <li>
        <Link to="/single">计数器显示</Link>
      </li>
      <li>
        <Link to="/optimize">性能优化之shouldComponentUpdate,及第三方动画库做简单动画</Link>
      </li>
      <li>
        <Link to="/echart">echart的简单应用</Link>
      </li>
      <li>
        <Link to="/map">echart实现中国地图</Link>
      </li>
      <li>
        <Link to="/useMemo">hook之useMemo</Link>
      </li>
      <li>
        <Link to="/useCallback">hook之useCallback</Link>
      </li>
    </ul>
  );
}

function App() {
  return (
    // basename 为路由前添加前缀
    // <BrowserRouter basename={'/douyu'}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/practice" component={Practice} />
            <Route path="/test" component={Test} />
            <Route path="/queryChildren" component={QueryChildren} />
            <Route path="/counter" component={Counter} />
            <Route path="/single" component={Single} />
            <Route path="/optimize" component={Optimize} />
            <Route path="/echart" component={EchartBox} />
            <Route path="/map" component={ChinaMap} />
            <Route path="/useMemo" component={UseMemo} />
            <Route path="/useCallback" component={UseCallback} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

function Practice({ location }) {
  console.log(JSON.parse(new URLSearchParams(location.search).get('data')));
  if (!location.search ) {
    return 'No Click';
  }
  const data = JSON.parse(new URLSearchParams(location.search).get('data'));
  return Object.keys(data).map((item) => (
    <div key={item}>
      {item} : {data[item]}
    </div>
  ))
}

function About({ location }) {
  return (<h2>About: { location.query ? location.query.name : 'No Click' }</h2>);  
}

function Test({location}) {
  return (<h2>Test: {location.params ? location.params.name : 'No Click' }</h2>);
}


function SonQuery({ location }) {
  // console.log('SonQuery', location);
  if (location.query) {
    return location.query.name;
  } else  if (location.params) {
    return location.params.name;
  } 
  return <h3> No Click</h3>;
}

function QueryChildren({ match }) {
  return (
    <div>
      <h2>嵌套路由</h2>
      <ul>
        <li>
          <Link to={{ pathname:`${match.path}/apple` , query: { name: '苹果' } }}>苹果</Link>
        </li>
        <li>
          <Link to={{ pathname:`${match.path}/putao`, params: { name: '葡萄' } }}>葡萄</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/`} component={SonQuery} />
        <Route path={`${match.path}/putao`} component={SonQuery} />
      </Switch>
    </div>
  );
}

export default App;
