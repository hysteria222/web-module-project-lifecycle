import React from 'react'

export default class Todo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
      <div onClick={this.props.toggleCompleted(this.props.td.id)} key={td.id}>{td.name}{td.completed? '✓' : ''}</div>
      </>
    )
  }
}
