let EventEmitter = require('events').EventEmitter,
    Dispatcher = require('../dispatcher/app-dispatcher'),
    constants = require('../constants/constants')

let _todos = {}

let CHANGE_EVENT = 'change'

function create(title) {
  let id = Date.now()
  _todos[id] = {
    id: id,
    complete: false,
    title: title
  }
}

function destroy(id) {
  delete _todos[id]
}

let TodosStore = Object.assign({}, EventEmitter.prototype, {

  getAll: function() {
    return _todos
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT)
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback)
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },

  dispatchIndex: Dispatcher.register(function(payload) {
    let action = payload.action,
        title
    switch(action.actionType) {
    case constants.TODO_CREATE:
      title = action.title.trim()
      if (title === '')
        return false
      create(title)
      TodosStore.emitChange()
      break
    case constants.TODO_DESTROY:
      destroy(action.id)
      TodosStore.emitChange()
      break
    default:
    }
    return true
  })

})

module.exports = TodosStore
