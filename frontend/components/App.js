import React from 'react'
import Form from './Form'
import axios from 'axios'
import TodoList from './TodoList'


const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor(props) {
    super(props) 
      this.state = {
        toDos: [],
        err: '',
        toDoNameChange: '',
        displayCompleted: true
      }
  }
  
  onToDoNameChange = evt => {
    const { value } = evt.target
    this.setState({
      ...this.state,
      toDoNameChange: value
    })
  }

  resetForm = () => this.setState({toDoNameChange: ''})

  postNewToDo = () => {
    axios.post(URL, { name: this.state.toDoNameChange })
      .then(res => {
        console.log(res)
        this.setState({toDos: this.state.toDos.concat(res.data.data)})
        this.resetForm()
      })
      .catch(this.setErr)
  }

  setErr = err => { 
    this.setState({
      err: err.response.data.message
    })
  }

  onFormSubmit = evt => {
    evt.preventDefault()
    this.postNewToDo()
  }

  getToDos = () => {
    axios.get(URL) 
      .then(res => {
        this.setState({
          toDos: res.data.data
        })
      })
      .catch(this.setErr)
  }

  toggleCompleted = id => () => {
    axios.patch(`${URL}/${id}`)
      .then(res => {
        this.setState({toDos: this.state.toDos.map(td => {
          if(td.id !== id) {
            return td
          }
          return res.data.data
          })
        })
      })
      .catch(this.setErr)
  }

  toggleDisplayCompleted = () => {
    this.setState({displayCompleted: !this.state.displayCompleted })
  }

  componentDidMount() {
    this.getToDos()
    console.log(this.state.toDos)
  }

  render() {
    return (
      <div>
        <span>Errors: {this.state.err}</span>
        <TodoList toDos={this.state.toDos} toggleCompleted={this.toggleCompleted}/>
        <Form toDoNameChange={this.state.toDoNameChange} onToDoNameChange={this.onToDoNameChange} onFormSubmit={this.onFormSubmit} toggleDisplayCompleted={this.toggleDisplayCompleted} displayCompleted={this.state.displayCompleted}/>
      </div>
    )
  }
}
