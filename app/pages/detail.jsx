import React from 'react'
import { connect } from 'react-redux'
import * as detailActions from '../redux/actions/detail'
import Loading from '../components/loading'
import styles from './detail.less'

function mapStateToProps(state) {
  return { ...state.detail }
}

function mapDispatchToProps(dispath) {
  return {
    fetchDetail: id => dispath(detailActions.fetchDetail(id)),
    reset: () => dispath(detailActions.reset())
  }
}

class Detail extends React.Component {
  static asyncData(store, match) {
    const { fetchDetail } = mapDispatchToProps(store.dispatch)
    return fetchDetail(match.params.id)
  }

  componentDidMount() {
    const { fetchDetail, match, data } = this.props
    // eslint-disable-next-line no-unused-expressions
    data || fetchDetail(match.params.id)
  }

  componentWillUnmount() {
    this.props.reset()
  }

  render() {
    const { data } = this.props
    const page = this.props.loaded ? (
      <Loading />
    ) : (
      // eslint-disable-next-line react/no-danger
      <section className={styles['article-body']} dangerouslySetInnerHTML={{ __html: data }} />
    )
    return <>{page}</>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail)
