import React from 'react'

class Input extends React.Component {
  constructor(props) {
    super(props)
    const { id } = this.props
    this.state = {
      key: id,
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const { id, value } = e.target
    this.setState({ key: id, value })
  }

  render() {
    const { key, value } = this.state
    return <input id={key} key={key} value={value} onChange={this.handleChange} />
  }
}

export default Input
