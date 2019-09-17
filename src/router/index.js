import React, { useState, useEffect } from "react";
import { HashRouter ,BrowserRouter, Route, Link,Switch } from "react-router-dom";
import Home from '../page/CssTest/index'
import Counter from '../page/Counter/index'
import { connect } from 'react-redux';


function mapStateToProps(state) {
  return {
    num: state.count,
  };
}
function App({num}) {
  const [count, setCount] = useState(0);
  console.log('222222', num);
  useEffect(() => {
    console.log('111111111' , num);
  }, [num]);
  return (
    <HashRouter>
      <div>
        <Header />
        <div>
          test---
          {num}
        </div>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/hasChildren" component={HasChildren} />
            <Route path="/counter" component={Counter} />
        </div>
        
      </div>
    </HashRouter>
  );
}


function About({location}) {
console.log(location);
  return (<h2>About: { location.query ? location.query.name : 'no more' }</h2>);
}

function ItemDetails() {
    return <h2>ItemDetails</h2>;
  }

function Topic() {
  return <h3>Components</h3>;
}

function HasChildren({ match }) {
    console.log(match);
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.path}/Components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.path}/itemDetails`}>itemDetails</Link>
        </li>
      </ul>

      {/* <Route path={`${match.path}/:id`} component={Topic} /> */}
      <Switch>
         <Route path='/hasChildren/ItemDetails' component={ItemDetails} />  
         <Route path='/hasChildren/' component={Topic} />
      </Switch>
    </div>
  );
}
    
function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to={{ pathname:"/about" , query: { name: 'Anny' } }}>About</Link>
      </li>
      <li>
        <Link to="/hasChildren">HasChildren</Link>
      </li>
      <li>
        <Link to="/counter">Counter</Link>
      </li>
    </ul>
  );
}

export default connect(mapStateToProps)(App);
