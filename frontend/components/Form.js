import React from 'react'

export default class Form extends React.Component {
  constructor(props) {
    super(props) 
   
  }
  render() {
    const nameChange = this.props.onToDoNameChange
    return (
      <form id="todo">
        <input type="text" placeholder="Type Todo Here" onChange={nameChange}></input>
        <input type="submit"></input>
        <button>Clear Completed</button>
      </form>
    )
  }
}
