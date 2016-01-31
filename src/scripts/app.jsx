let d = require('debug')('app')

let React    = require('react'),
    ReactDOM = require('react-dom')

let TodoFormNode = require('./todo-form.jsx')
let TodosNode = require('./todos.jsx'),
    TodosStore = require('./stores/todos-store')

let App = React.createClass({

  getInitialState: function() {
    d('#getInitialState')
    return {todos: TodosStore.getAll()}
  },

  componentDidMount: function() {
    d('#componentDidMount')
    TodosStore.addChangeListener(this._onChange)
  },

  componentWillUnmount: function() {
    d('#componentWillUnmount')
    TodosStore.removeChangeListener(this._onChange)
  },

  handleKeyDown: function(e) {
    d('#handleKeyDown')
  },
  handleChange: function(e) {
    d('#handleChange')
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
      </div>
    )
  },

  _onChange: function() {
    this.setState({todos: TodosStore.getAll()})
  }
})

module.exports = App
