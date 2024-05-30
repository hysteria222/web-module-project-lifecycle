import React from 'react'
import Form from './Form'
import axios from 'axios'


const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor() {
    super() 
      this.state = {
        toDos: [],
        err: '',
        toDoNameChange: '',
      }
  }
  onToDoNameChange = evt => {
    const { value } = evt.target
    this.setState({
      ...this.state.toDoNameChange,
      toDoNameChange: value
    })
  }

  getToDos = () => {
    axios.get(URL) 
      .then(res => {
        this.setState({
          ...this.state.toDos, 
          toDos: res.data.data
        })
      })
      .catch(err => {
        this.setState({
          ...this.state, 
          err: err.response.data.message
        })
      })
  }
  componentDidMount() {
    this.getToDos()
    console.log(this.state.toDos)
  }
  render() {
    return (
      <div>
        <span>Errors: {this.state.err}</span>
        {
          this.state.toDos.map(td => {
            return (
              <div key={td.id}>{td.name}</div>
            )
          })
        }
        <Form onToDoNameChange={this.onToDoNameChange}/>
      </div>
    )
  }
}
