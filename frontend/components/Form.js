import React from 'react'

export default class Form extends React.Component {
  constructor(props) {
    super(props) 
   
  }
  render() {
   
    return (
      <>
      <form id="todo" onSubmit={this.props.onFormSubmit}>
        <input 
          type="text" 
          placeholder="Type Todo Here" 
          value={this.props.toDoNameChange} 
          onChange={this.props.onToDoNameChange}
          />

        <input type="submit" />
      </form>
      <button onClick={this.props.toggleDisplayCompleted}> {this.props.displayCompleted ? 'Hide' : 'Show'} Completed </button>
      </>
    )
  }
}
