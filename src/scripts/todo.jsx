let d = require('debug')('todo')

let React    = require('react'),
    ReactDOM = require('react-dom')

let TodoNode = React.createClass({

  handleChange: function(e) {
    d('#handleChange')

  },
  render: function() {
    return (
      <tr>
        <td><input type="checkbox" checked={this.props.completed} onChange={this.handleChange}/></td>
        <td>{this.props.title}</td>
        <td>{this.props.dueDate}</td>
      </tr>
    )
  }
})

module.exports = TodoNode
