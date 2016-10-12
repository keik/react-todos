import debug from 'debug'
import React from 'react'

const d = debug('react-todos:components:todo')

export default class TodoNode extends React.Component {

  handleChange = () => {
    d('#handleChange')
  }

  render = () => {
    return (
      <tr>
        <td>
          <input
            type="checkbox"
            checked={this.props.todo.complete}
            onChange={this.handleChange}
          />
        </td>
        <td>
          {this.props.todo.text}
        </td>
        <td>
          {this.props.todo.dueDate}
        </td>
      </tr>
    )
  }
}
