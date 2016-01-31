let d = require('debug')('app')

let React    = require('react'),
    ReactDOM = require('react-dom')

let TodoFormNode = require('./todo-form.jsx')
let TodosNode = require('./todos.jsx')

let App = React.createClass({

  componentDidMount: function() {
    d('#componentDidMount')
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
          <TodoFormNode url="http://localhost:3000/api/todos"/>
        </section>
        <section>
          <TodosNode url="http://localhost:3000/api/todos"/>
        </section>
      </div>
    )
  }
})

module.exports = App
