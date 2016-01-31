var d = require('debug')('app')

var React    = require('react'),
    ReactDOM = require('react-dom')

var Todos = require('./todos')

var App = React.createClass({

  handleSubmit: function(e) {
    d('#handleSubmit')
    e.preventDefault()
  },
  handleKeyDown: function(e) {
    d('#handleKeyDown')
  },
  handleChange: function(e) {
    d('#handleChange')
  },

  render: function() {
    d('#render')

    var todos = (
      <ul>
        <li>unko
        </li>
      </ul>
    )

    return (
      <div>
        <section className="jumbotron">
          <h1>todos</h1>
        </section>
        <section className="row buffer-bottom">
          <form className="col-xs-offset-4 col-xs-4" onSubmit={this.handleSubmit}>
            <input
               className="form-control"
               placeholder="new Todo"
               value={'unko'}
               onKeyDown={this.handleKeyDown}
               onChange={this.handleChange}
               autoFocus={true}
               />
          </form>
        </section>
        <section>
          <Todos/>
        </section>
      </div>
    )
  }
})

module.exports = App
