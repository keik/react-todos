let d = require('debug')('todo-form')

let React    = require('react'),
    ReactDOM = require('react-dom')

let TodoFormNode = React.createClass({

  getInitialState: function() {
    return {title: '', dueDate: ''}
  },

  handleTitleChange: function(e) {
    d('#handleTitleChange')
    this.setState({title: e.target.value})
  },

  handleSubmit: function(e) {
    d('#handleSubmit')
    e.preventDefault()
    let title = this.state.title
    if (!title)
      return

    let newTodo = {title: title}
    fetch(this.props.url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newTodo)
    }).then(res => {
      if (res.ok) {
        // TODO update store and emit changes
      }
    }).catch(err => {
      console.log(err)
    })
    this.setState({title: ''})
  },

  render: function() {
    return (
        <form className="col-xs-offset-4 col-xs-4" onSubmit={this.handleSubmit}>
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
})

module.exports = TodoFormNode
