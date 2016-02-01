let d = require('debug')('[component] todos-controller')

let React       = require('react'),
    ReactDOM    = require('react-dom'),
    TodoActions = require('../actions/todo-actions')

let TodoControllerNode = React.createClass({

  propTypes: {
    todos: React.PropTypes.object.isRequired
  },

  render: function() {
    d('#render')
    return (
      <div className="row">
        <div className="col-xs-4 btn-group">
          <button className="btn btn-default active">All</button>
          <button className="btn btn-default">Completed</button>
          <button className="btn btn-default">Active</button>
        </div>

        <div className="col-xs-offset-4 col-xs-4">
          <button className="btn btn-primary"
                  onClick={this.onClickToggleComplete}>
            Complete all
          </button>
          <button className="btn btn-danger"
                  onClick={this.onClickClearCompleted}>Delete completed
          </button>
        </div>
      </div>
    )
  },

  onClickToggleComplete: function() {
    d('#onClickToggleComplete')
    let ids = Object.keys(this.props.todos)
    TodoActions.toggleComplete(ids)
  },

  onClickClearCompleted: function() {
    d('#onClickClearCompleted')
  }

})

module.exports = TodoControllerNode
