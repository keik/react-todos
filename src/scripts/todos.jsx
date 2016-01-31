let d = require('debug')('todos')

let React    = require('react'),
    ReactDOM = require('react-dom'),
    TodoNode = require('./todo.jsx')

let TodosNode = React.createClass({

  getInitialState: function() {
    return {todos: []}
  },
  componentDidMount: function() {
    d('#componentDidMount')
    fetch(this.props.url)
      .then(res => res.json())
      .then(msg => {
        // TODO update store and emit changes
        this.setState({todos: msg})
      }).catch(err => console.log(err))
  },

  render: function() {

    let todoNodes = this.state.todos.map(function(todo) {
      return (
        <TodoNode key={todo.id} completed={todo.completed} title={todo.title} dueDate={todo.dueDate}/>
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

module.exports = TodosNode
