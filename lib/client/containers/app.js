import debug from 'debug'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TodoFormNode from '../components/todo-form'
import TodosNode from '../components/todos'
import * as TodoActions from '../actions/index.js'

const d = debug('react-todos:container:app')

class App extends React.Component {

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
    const {actions, todos} = this.props
    return (
      <div>
        <section
          className="jumbotron text-center">
          <h1>TODOS</h1>
        </section>
        <section
          className="row buffer-bottom">
          <TodoFormNode
            actions={actions}
            url="http://localhost:3000/api/todos"
          />
        </section>
        <section>
          <TodosNode
            todos={todos}
            url="http://localhost:3000/api/todos"
          />
        </section>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
