import test from 'ava'

import * as Actions from '../../../lib/client/actions/index'
import * as ActionTypes from '../../../lib/client/constants/action-types'

let action
test('addTodo should create ADD_TODO action', (t) => {
  action = Actions.addTodo('new todo')
  t.deepEqual(action, {
    type: ActionTypes.ADD_TODO,
    text: 'new todo'
  })
})

test('deleteTodo should create DELETE_TODO action', (t) => {
  action = Actions.deleteTodo(1)
  t.deepEqual(action, {
    type: ActionTypes.DELETE_TODO,
    id: 1
  })
})
