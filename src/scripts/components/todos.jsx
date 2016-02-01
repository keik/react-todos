let d = require('debug')('[component] todos')

let React    = require('react'),
    ReactDOM = require('react-dom')

let TodoNode = require('./todo.jsx')

let TodosNode = React.createClass({

  propTypes: {
    todos: React.PropTypes.object.isRequired
  },

  render: function() {
    let todos = this.props.todos
    if (Object.keys(todos).length < 1)
      return null

    let todoNodes = Object.keys(todos).map((id) => (
        <TodoNode key={id} complete={todos[id].complete} title={todos[id].title} dueDate={todos[id].dueDate}/>
    ))

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
