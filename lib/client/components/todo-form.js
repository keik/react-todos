import debug from 'debug'
import React from 'react'

const d = debug('react-todos:components:todo-form')

export default class TodoFormNode extends React.Component {

  constructor() {
    super()
    this.state = {
      title: '',
      dueDate: '',
    }
  }

  handleTitleChange = (e) => {
    d('#handleTitleChange')
    this.setState({title: e.target.value})
  }

  handleSubmit = (e) => {
    d('#handleSubmit')
    e.preventDefault()
    this.props.actions.addTodo('aaa')

    /* let title = this.state.title
     * if (!title)
     *   return

     * let newTodo = {title: title}
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
     * this.setState({title: ''})*/
  }

  render() {
    return (
      <form
        className="col-xs-offset-4 col-xs-4"
        onSubmit={this.handleSubmit}>
        <input
          className="form-control"
          placeholder="new Todo"
          value={this.state.title}
          onChange={this.handleTitleChange}
          autoFocus={true}
        />
      </form>
    )
  }
}
