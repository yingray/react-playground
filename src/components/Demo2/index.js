// eslint-disable-next-line
import React from 'react'
import Input from './Input'
import _ from 'lodash'

export default class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: new Array(5000)
    }
  }

  render() {
    const { state: { arr } } = this
    return <div>{_.map(arr, (v, i) => <Input key={i} />)}</div>
  }
}
