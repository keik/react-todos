let d = require('debug')('[store] todos-store')

let EventEmitter = require('events').EventEmitter,
    Dispatcher = require('../dispatcher/dispatcher'),
    constants = require('../constants/constants')

let _todos = {}

let TodosStore = Object.assign({}, EventEmitter.prototype, {

  CHANGE: 'change',

  getAll: function(remoteFetch) {
    d('#getAll')
    return _todos
  },

  fetch: function() {
    d('#_fetch')
  }
})

Dispatcher.register((action) => {
  switch(action.actionType) {
  case constants.TODO_CREATE:
    let title = action.title.trim()
    if (title)
      _create(title)
    break
  case constants.TODO_DESTROY:
    // TODO
    break

  case constants.TODOS_FETCH:
    _fetch()
  default:
  }
})

function _create(title) {
  d('#_create')
  fetch(constants.ENDPOINT_TODOS, {
    method: 'POST',
    body: JSON.stringify({title: title, complete: false, dueDate: null}),
    headers: {'Content-Type': 'application/json'}
  }).then(res => {
    if (!res.ok) throw new Error('WHAT')
    return res.json()
  }).then(todo => {
    _todos[todo.id] = todo
    TodosStore.emit(TodosStore.CHANGE)
  }).catch(err => console.log(err))
}

function _fetch() {
  fetch(constants.ENDPOINT_TODOS, {
    method: 'GET'
  }).then((res) => {
    if (!res.ok) throw new Error('WHAT')
    return res.json()
  }).then(todos => {
    todos.forEach(todo => _todos[todo.id] = todo)
    TodosStore.emit(TodosStore.CHANGE)
  }).catch(err => console.log(err))
}

function destroy(id) {
  d('#destroy')
  delete _todos[id]
  TodosStore.emit(TodosStore.CHANGE)
}

module.exports = TodosStore
