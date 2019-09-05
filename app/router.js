import { Link, Switch, Route } from 'react-router-dom';
import React from 'react';


const Home = () => {
  return (
    <div>
      <h1>首页</h1>
      <Link to="/list">列表</Link>
    </div>
  )
}

const list = [
  'react',
  'koa',
  'ssr'
]

const List = () => {
  return (
    <ul>
      {list.map((item, key) => <li key={key}>{item}</li>)}
    </ul>
  )
}

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/list" component={List}></Route>
    </Switch>
  )
}