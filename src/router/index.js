// 如何实现一个react-router路由拦截（导航守卫） https://juejin.im/post/5c31aede6fb9a04a0d570107
import React from 'react';
import { BrowserRouter, HashRouter, Route, Link,Switch } from 'react-router-dom';
// import { browserHistory, Router} from 'react-router';
import {
  Modal, message,
} from 'antd';
import Home from '../page/CssTest/index';
import history from '../history';
import Counter from '../page/Counter/index';
import Optimize from '../page/Optimize/index';
import EchartBox from '../page/echartBox/index';
import ChinaMap from '../page/chinaMap/index';
import UseMemo from '../page/useMemo/index';
import UseCallback from '../page/useCallback/index';
import Memo from '../page/memoParent/index';
import HeightEchart from '../page/heightEchart/index';
import FormBox from '../page/form/index';
import PromiseTest from '../page/promise/index';

/**
 * 解决ant-design的路由跳转，modal和message组件不关闭问题
 */
history.listen(() => {
  Modal.destroyAll();
  message.destroy();
});
function Header() {
  return (
    <ul>
      <li>
        <Link to="/">css避免全局渲染方案，打开控制台查看类名</Link>
      </li>
      <li>
        echart
        <ul>
          <li>
          <Link to="/echart">echart的简单应用</Link>
          </li>
          <li>
            <Link to="/map">echart实现中国地图并实现图层叠加</Link>
          </li>
          <li>
            <Link to="/heightEchart">echart的高级应用</Link>
          </li>
        </ul>
      </li>
      <li>
        react-router(可打开控制台观察数据的变化)
        <ul>
          <li>
            <Link to={{ pathname:"/query", query: { name: 'Anny', time: '2', obj: JSON.stringify({
              name: 'IG',
              sex: 'man',
            })}}}>路由query传参</Link>
          </li>
          <li>
            <Link to={`/link?data=${encodeURIComponent(JSON.stringify({
              name: 'IG',
              sex: 'man',
            }))}`}>
              路由Link to传一个对象，并url加密
            </Link>
          </li>
          <li>
            <Link to={{ pathname:"/params" , params: { name: 'Ming', year:'18', obj: JSON.stringify({
              name: 'IG',
              sex: 'man',
            })} }}>路由params传参</Link>
          </li>
          <li>
            <Link to="/queryChildren">嵌套路由</Link>
          </li>
        </ul>
      </li>
      
      <li>
        <Link to="/counter">react-redux的应用和异步流</Link>
      </li>
      <li>
        <Link to="/optimize">性能优化之shouldComponentUpdate,及第三方动画库做简单动画</Link>
      </li>
      <li>
        <Link to="/memo">性能优化之memo，相当于函数组件里的shouldComponentUpdate</Link>
      </li>
      <li>
        <Link to="/useMemo">hook之useMemo</Link>
      </li>
      <li>
        <Link to="/useCallback">hook之useCallback</Link>
      </li>
      <li>
        <Link to="/form">form表单</Link>
      </li>
      <li>
        <Link to="/testPromise">封装req的方法</Link>
      </li>
    </ul>
  );
}

function App() {
  return (
    // basename 为路由前添加前缀
    // <BrowserRouter basename={'/douyu'}>
    <HashRouter >
      <div style={{ marginLeft: 40 }}>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/query" component={RouteQuery} />
            <Route path="/link" component={RouteLink} />
            <Route path="/params" component={RouteParams} />
            <Route path="/queryChildren" component={QueryChildren} />
            <Route path="/counter" component={Counter} />
            <Route path="/optimize" component={Optimize} />
            <Route path="/echart" component={EchartBox} />
            <Route path="/map" component={ChinaMap} />
            <Route path="/useMemo" component={UseMemo} />
            <Route path="/useCallback" component={UseCallback} />
            <Route path="/memo" component={Memo} />
            <Route path="/heightEchart" component={HeightEchart} />
            <Route path="/form" component={FormBox} />
            <Route path="/testPromise" component={PromiseTest} />
        </Switch>
      </div>
    </HashRouter>
  );
}

function RouteLink({ location }) {
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

function RouteQuery({ location }) {
  console.log('query传参', location);
  return (<h2>About: { location.query ? `name：${location.query.name}, time: ${location.query.time}` : 'No Click' }</h2>);  
}

function RouteParams({location}) {
  console.log('params传参', location);
  return (<h2>试一下: {location.params ? `name为${location.params.name}, year为${location.params.year}` : 'No Click' }</h2>);
}


function SonQuery({ location }) {
  console.log('嵌套路由', location);
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
