import debug from 'debug'
import React from 'react'

const d = debug('react-todos:components:todo-form')

export default class TodoFormNode extends React.Component {

  constructor() {
    super()
    this.state = {
      text: '',
      dueDate: '',
    }
  }

  handleTextChange = (e) => {
    d('#handleTextChange')
    this.setState({text: e.target.value})
  }

  handleSubmit = (e) => {
    d('#handleSubmit')
    e.preventDefault()
    const text = e.target.elements[0].value.trim()
    if (text !== '') {
      this.setState({text: ''})
      this.props.actions.addTodo(text)
    }
    /* let text = this.state.text
     * if (!text)
     *   return

     * let newTodo = {text: text}
     * fetch(this.props.url, {
     *   method: 'POST',
     *   headers: {'Content-Type': 'application/json'},
     *   body: JSON.stringify(newTodo)
     * }).then(res => {
     *   if (res.ok) {
     *     // TODO update store and emit changes
     *   }
     * }).catch(err => {
     *   console.log(err)
     * })
     * this.setState({text: ''})*/
  }

  render = () => {
    return (
      <form
        className="col-xs-offset-4 col-xs-4"
        onSubmit={this.handleSubmit}>
        <input
          className="form-control"
          placeholder="new Todo"
          value={this.state.text}
          onChange={this.handleTextChange}
          autoFocus={true}
        />
      </form>
    )
  }
}
