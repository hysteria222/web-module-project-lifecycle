import React from 'react'
import Form from './Form'
import axios from 'axios'


const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor(props) {
    super(props) 
      this.state = {
        toDos: [],
        err: '',
        toDoNameChange: '',
      }
  }
  
  onToDoNameChange = evt => {
    evt.preventDefault()
    const { value } = evt.target
    this.setState({
      ...this.state,
      toDoNameChange: value
    })
  }

  postNewToDo = () => {
    axios.post(URL, { name: this.state.toDoNameChange })
      .then( res => {
        this.getToDos()
        this.setState({
          ...this.state,
          toDoNameChange: ''
        })
      })
      .catch(err => {console.log(err)})
  }

  onFormSubmit = evt => {
    evt.preventDefault()
    this.postNewToDo()
  }

  getToDos = () => {
    axios.get(URL) 
      .then(res => {
        this.setState({
          ...this.state, 
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
        <Form onToDoNameChange={this.onToDoNameChange} onFormSubmit={this.onFormSubmit}/>
      </div>
    )
  }
}
