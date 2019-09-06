/* eslint-disable radix */
import React from 'react'
import styles from './time.less'

const minute = 1000 * 60
const hour = minute * 60
const day = hour * 24
const month = day * 30

function getDate(dateTimeStamp) {
  if (dateTimeStamp === undefined) {
    return false
  }
  // eslint-disable-next-line no-param-reassign
  dateTimeStamp = dateTimeStamp.replace(/\\-/g, '/')

  const sTime = new Date(dateTimeStamp).getTime() // 把时间pretime的值转为时间戳

  const now = new Date().getTime() // 获取当前时间的时间戳

  const diffValue = now - sTime

  if (diffValue < 0) {
    return ''
  }

  const monthC = diffValue / month
  const weekC = diffValue / (7 * day)
  const dayC = diffValue / day
  const hourC = diffValue / hour
  const minC = diffValue / minute

  if (monthC >= 1) {
    return `${parseInt(monthC)}个月前`
  }
  if (weekC >= 1) {
    return `${parseInt(weekC)}周前`
  }
  if (dayC >= 1) {
    return `${parseInt(dayC)}天前`
  }
  if (hourC >= 1) {
    return `${parseInt(hourC)}个小时前`
  }
  if (minC >= 1) {
    return `${parseInt(minC)}分钟前`
  }
  return '刚刚'
}

export default props => <span className={styles.time}>{getDate(props.time)}</span>
