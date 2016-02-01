let d = require('debug')('[component] todo-form')

let React    = require('react'),
    ReactDOM = require('react-dom'),
    TodoActions = require('../actions/todo-actions')

let TodoFormNode = React.createClass({

  propTypes: {
    todos: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {complete: false, title: '', dueDate: ''}
  },

  handleTitleChange: function(e) {
    d('#handleTitleChange')
    this.setState({title: e.target.value})
  },

  render: function() {
    d('#render')
    return (
      <form className="col-xs-offset-4 col-xs-4" onSubmit={this.onSubmit}>
        <input
           className="form-control"
           placeholder="new Todo"
           value={this.state.title}
           onChange={this.handleTitleChange}
           autoFocus={true}
           />
      </form>
    )
  },

  onSubmit: function(e) {
    d('#onSubmit')
    e.preventDefault()
    TodoActions.create(this.state.title)
  }
})

module.exports = TodoFormNode
