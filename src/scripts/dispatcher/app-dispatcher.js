let Dispatcher = function() {}

let _callbacks = []
var _promises = []

Dispatcher.prototype = Object.assign({}, Dispatcher.prototype, {

  register: function(callback) {
    _callbacks.push(callback)
    return _callbacks.length - 1
  },

  dispatch: function(payload) {
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
