import debug from 'debug'
import React from 'react'

import TodoNode from './todo'

const d = debug('react-todos:components:todos')

export default class TodosNode extends React.Component {

  constructor() {
    super()
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    d('#componentDidMount')
    fetch(this.props.url)
              .then(res => res.json())
              .then(msg => {
                // TODO update store and emit changes
                this.setState({todos: msg})
              }).catch(err => console.log(err))
  }

  render() {
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
}
