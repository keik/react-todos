# react-todos

an example app with following stacks

* [react](https://github.com/facebook/react)


## develop

```
% make watch
```

for

* running developing server with [budo](https://github.com/mattdesl/budo), which browserify scripts automatically (default port: 9966)
* running RESTful API server with [json-server](https://github.com/typicode/json-server), which store data to `db.json` (default port: 3000)
* watching changes of *.less and compile src/bundle.css


you can run each task above separately with

* `make run-dev-server`
* `make run-json-server`
* `make watch-less`

for more details, see `Makefile`


## build

```
% make build
```

output `bundle.js` / `bundle.css` into `dist` directory
