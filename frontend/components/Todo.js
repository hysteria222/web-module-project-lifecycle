import React from 'react'

export default class Todo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
      <div onClick={this.props.toggleCompleted(this.props.toDos.id)}>
        {this.props.toDos.name}{this.props.toDos.completed ? ' ✓' : ''}
      </div>
      </>
    )
  }
}
