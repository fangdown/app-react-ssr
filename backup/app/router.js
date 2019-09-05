import React from 'react';
import Home from './page/home'
import List from './page/list'

export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/list',
    component: List,
    exact: true
  }
]