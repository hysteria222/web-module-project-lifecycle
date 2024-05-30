import React from 'react'
import TodoList from './TodoList'

export default class Todo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <TodoList /> 
    )
  }
}
