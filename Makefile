DIST=dist
MAIN_JS=src/scripts/main.js
BUNDLE_JS=$(DIST)/bundle.js

build: node_modules $(DIST)
	@node_modules/.bin/browserify -t [ babelify --presets [ react es2015 ] ] $(MAIN_JS) -o $(BUNDLE_JS)

watch:
	@make -j run-dev-server run-mock-api-server watch-less

run-mock-api-server: node_modules
	@node_modules/.bin/json-server --watch db.json --routes routes.json

run-dev-server: node_modules
	@node_modules/.bin/budo src/scripts/main.js:src/bundle.js -- -t [ babelify --presets [ react es2015 ] ]

watch-less: node_modules
	@node_modules/.bin/watchf 'src/styles/**/*less' -c 'make css'

css: node_modules
	@node_modules/.bin/lessc src/styles/main.less src/bundle.css

lint: node_modules
	@node_modules/.bin/eslint src/scripts/**/*.js

$(DIST):
	@mkdir -p $@

node_modules: package.json
	@npm i
