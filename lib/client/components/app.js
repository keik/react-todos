import debug from 'debug'
import React from 'react'

import TodoFormNode from './todo-form'
import TodosNode from './todos'

const d = debug('react-todos:component:app')

export default class App extends React.Component {

  componentDidMount() {
    d('#componentDidMount')
  }

  handleKeyDown() {
    d('#handleKeyDown')
  }

  handleChange() {
    d('#handleChange')
  }

  render() {
    d('#render')

    return (
      <div>
        <section
          className="jumbotron text-center">
          <h1>TODOS</h1>
        </section>
        <section
          className="row buffer-bottom">
          <TodoFormNode
            url="http://localhost:3000/api/todos"
          />
        </section>
        <section>
          <TodosNode
            url="http://localhost:3000/api/todos"
          />
        </section>
      </div>
    )
  }
}
