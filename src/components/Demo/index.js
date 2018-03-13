// eslint-disable-next-line
import React from 'react'
import _ from 'lodash'

export default class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: _.map(new Array(5000), (v, i) => ({ key: i, value: i }))
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    const arr = this.state.arr
    const { id, value } = e.target
    arr[id] = { key: id, value }
    this.setState({ arr })
  }

  getStyle(i) {
    return {
      fontSize: i
    }
  }

  render() {
    const { state: { arr }, state, handleChange, getStyle } = this
    return (
      <div>
        {_.map(arr, v => (
          <input id={v.key} key={v.key} value={v.value} onChange={this.handleChange} />
        ))}
      </div>
    )
  }
}
