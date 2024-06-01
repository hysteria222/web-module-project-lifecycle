import React from 'react'

export default class Form extends React.Component {
  constructor(props) {
    super(props) 
   
  }
  render() {
    const onToDoNameChange = this.props.onToDoNameChange
    const onFormSubmit = this.props.onFormSubmit
    
    return (
      <form id="todo" onSubmit={onFormSubmit}>
        <input type="text" placeholder="Type Todo Here" onChange={onToDoNameChange}></input>
        <input type="submit" ></input>
        <button>Clear Completed</button>
      </form>
    )
  }
}
