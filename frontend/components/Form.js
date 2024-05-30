import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <form id="todo">
        <input type="text" placeholder="Type Todo Here"></input>
        <input type="submit"></input>
      </form>
    )
  }
}
