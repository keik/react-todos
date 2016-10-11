import * as ActionTypes from '../constants/action-types'

export const addTodo = (text) => ({ type: ActionTypes.ADD_TODO, text })
export const deleteTodo = (id) => ({ type: ActionTypes.DELETE_TODO, id })
