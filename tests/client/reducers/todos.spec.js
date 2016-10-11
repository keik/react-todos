import test from 'ava'

import * as ActionTypes from '../../../lib/client/constants/action-types'
import todos from '../../../lib/client/reducers/todos'

test('todo reducer should handle initial state', (t) => {
  t.deepEqual(todos(undefined, {}),
              [{id: 0,
                text: 'DUMMY',
                complete: false}])
})

test('todo reducer should handle ADD_TODO (0 todo -> 1 todo)', (t) => {
  t.deepEqual(todos([], {type: ActionTypes.ADD_TODO,
                         text: 'TODO 0'}),
              [{id: 0,
                text: 'TODO 0',
                complete: false}])
})

test('todo reducer should handle ADD_TODO (1 todo -> 2 todo)', (t) => {
  t.deepEqual(todos([{id: 0,
                      text: 'TODO 0',
                      complete: false}],
                    {type: ActionTypes.ADD_TODO,
                     text: 'TODO 1',
                    }),
              [{id: 1,
                text: 'TODO 1',
                complete: false},
               {id: 0,
                text: 'TODO 0',
                complete: false}])
})
