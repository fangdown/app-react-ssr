import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const List = props => (  // 括号 非花括号
  <ul>
    <li> <Link to="/">列表</Link></li>
    {props.list.map((item, key) => <li key={key}>{item}</li>)}
  </ul>
)

function mapStateToProps(state){
  return {...state.list}
}

export default connect(mapStateToProps)(List)