import debug from 'debug'
import React from 'react'

const d = debug('react-todos:components:todo')

export default class TodoNode extends React.Component {

  handleChange() {
    d('#handleChange')
  }

  render() {
    return (
      <tr>
        <td>
          <input
            type="checkbox"
            checked={this.props.completed}
            onChange={this.handleChange}
          />
        </td>
        <td>
          {this.props.title}
        </td>
        <td>
          {this.props.dueDate}
        </td>
      </tr>
    )
  }
}
