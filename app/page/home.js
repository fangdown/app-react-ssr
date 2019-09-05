import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Home = props => (
  <div>
    <h1>{props.title}</h1>
    <Link to="/list">列表</Link>
  </div>
)

function mapStateToProps(state){
  return {...state.home}
}

export default connect(mapStateToProps)(Home)