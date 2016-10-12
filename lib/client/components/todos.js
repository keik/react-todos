import debug from 'debug'
import React, { Component, PropTypes } from 'react'

import TodoNode from './todo'

const d = debug('react-todos:components:todos')

export default class TodosNode extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  constructor() {
    super()
    this.state = {
      todos: []
    }
  }

  componentDidMount = () => {
    d('#componentDidMount')
    /* fetch(this.props.url)
     *           .then(res => res.json())
     *           .then(msg => {
     *             // TODO update store and emit changes
     *             this.setState({todos: msg})
     *           }).catch(err => console.log(err))*/
  }

  render = () => {
    console.log(this.props.todos)
    let todoNodes = this.props.todos.map(function(todo) {
      return (
        <TodoNode
          key={todo.id}
          todo={todo}
        />
      )
    })

    return (
      <table className="table">
        <thead>
          <tr>
            <th className="col-xs-1">Complete</th>
            <th className="col-xs-6">Text</th>
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
