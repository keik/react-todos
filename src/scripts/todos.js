var d = require('debug')('todos')

var React    = require('react'),
    ReactDOM = require('react-dom')

var Todos = React.createClass({

  render: function() {
    var todos = [
      {id: 1, completed: false, title: 'task 1', dueDate: '2016-02-01'},
      {id: 2, completed: false, title: 'task 2', dueDate: '2016-02-02'},
      {id: 3, completed: true,  title: 'task 3', dueDate: '2016-02-03'}
    ]

    var todoNodes = todos.map(function(todo) {
      return (
        <Todo completed={todo.completed} title={todo.title} dueDate={todo.dueDate}/>
      )
    })

    return (
      <table className="table">
        <thead>
          <tr>
            <th className="col-xs-1">Completed</th>
            <th className="col-xs-6">Title</th>
            <th className="col-xs-5">Due date</th>
          </tr>
        </thead>
        <tbody>
          {todoNodes}
        </tbody>
      </table>
    )
  }
})

var Todo = React.createClass({

  handleChange: function(e) {
    d('#handleChange')
  },
  render: function() {
    return (
      <tr>
        <td><input type="checkbox" checked={this.props.completed} onChange={this.handleChange}/></td>
        <td>{this.props.title}</td>
        <td>{this.props.dueDate}</td>
      </tr>
    )
  }
})

module.exports = Todos
