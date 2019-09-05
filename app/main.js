import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './router'

console.log('Router', Router)
const fj = require('../static/1.jpg')

function App(){
  return (
    <BrowserRouter>
      <Router></Router>
    </BrowserRouter>
  )
}
render(
<BrowserRouter>
  <Router></Router>
</BrowserRouter>,
document.getElementById('app'))