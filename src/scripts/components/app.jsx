let d = require('debug')('[component] app')

let React    = require('react'),
    ReactDOM = require('react-dom')

let TodoFormNode        = require('./todo-form.jsx'),
    TodosNode           = require('./todos.jsx'),
    TodosControllerNode = require('./todos-controller.jsx'),
    TodoActions         = require('../actions/todo-actions'),
    TodosStore          = require('../stores/todos-store'),
    constants           = require('../constants/constants')

let AppNode = React.createClass({

  getInitialState: function() {
    d('#getInitialState')
    return {todos: TodosStore.getAll()}
  },

  componentDidMount: function() {
    d('#componentDidMount')
    TodoActions.fetch()
    TodosStore.on(TodosStore.CHANGE, this.onChangeTodosStore)
  },

  componentWillUnmount: function() {
    d('#componentWillUnmount')
    TodosStore.removeListener(TodosStore.CHANGE, this.onChangeTodosStore)
  },

  render: function() {
    d('#render')

    return (
      <div>
        <section className="jumbotron text-center">
          <h1>TODOS</h1>
        </section>
        <section className="row buffer-bottom">
          <TodoFormNode todos={this.state.todos}/>
        </section>
        <section>
          <TodosNode todos={this.state.todos}/>
        </section>
        <section>
          <TodosControllerNode todos={this.state.todos}/>
        </section>
      </div>
    )
  },

  onChangeTodosStore: function() {
    d('#onChangeTodosStore')
    this.setState({todos: TodosStore.getAll()})
  }
})

module.exports = AppNode
