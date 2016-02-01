let d = require('debug')('[action] todo-actions')

let Dispatcher = require('../dispatcher/dispatcher'),
    constants = require('../constants/constants')

let TodoActions = {

  create: function(title) {
    d('#create')
    Dispatcher.dispatch({
      actionType: constants.TODO_CREATE,
      title: title
    })
  },

  destroy: function(id) {
    d('#destroy')
    Dispatcher.dispatch({
      actionType: constants.TODO_DESTROY,
      id: id
    })
  },

  fetch: function() {
    d('#fetch')
    Dispatcher.dispatch({
      actionType: constants.TODOS_FETCH
    })
  },

  toggleCompleteAll: function() {
    d('#completeAll')
    Dispatcher.dispatch({
      actionType: constants.TODOS_TOGGLE_COMPLETE_ALL
    })
  },

  toggleComplete: function(id) {
    d('#complete')
    Dispatcher.dispatch({
      actionType: constants.TODOS_TOGGLE_COMPLETE,
      id: id
    })
  }

}


module.exports = TodoActions
