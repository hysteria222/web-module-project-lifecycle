import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  constructor(props) {
    super(props) 
    
  }
  render() {
    
    return (
      <>
         {
          this.props.toDos.reduce((acc, td) => {
            if (this.props.displayCompleted || !td.completed) return acc.concat(
              <Todo 
                toggleCompleted={this.props.toggleCompleted}
                toDos={td}
                key={td.id}
              /> 
            )
            return acc 
          }, [])
        }
      </>
    )
  }
}
