let d = require('debug')('[dispatcher] dispatcher')

let Dispatcher = function() {}

let _callbacks = []
var _promises = []

Dispatcher = Object.assign(Dispatcher, {

  register: function(callback) {
    d('#register')
    _callbacks.push(callback)
    return _callbacks.length - 1
  },

  dispatch: function(payload) {
    d('#dispatch')
    let resolves = [],
        rejects = []
    _promises = _callbacks.map((_, i) => {
      return new Promise((resolve, reject) => {
        resolves[i] = resolve
        rejects[i] = reject
      })
    })

    _callbacks.forEach((callback, i) => {
      Promise.resolve(callback(payload)).then(
        () => {
          resolves[i](payload)
        },
        () => {
          rejects[i](new Error('Dispatcher callback unsuccessful'))
        })
    })
    _promises = []
  }
})

module.exports = Dispatcher
