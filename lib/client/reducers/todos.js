import * as ActionTypes from '../constants/action-types'
const initialState = [
  {
    id: 0,
    text: 'DUMMY',
    complete: false,
  }
]

export default function todos(state = initialState, action) {

  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          complete: false,
          text: action.text
        },
        ...state
      ]
    case ActionTypes.DELETE_TODO:
      return state.filter(todo => (todo.id !== action.id))
    default:
      return state
  }
}
