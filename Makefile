TAG="\n\n\033[0;32m\#\#\# "
END=" \#\#\# \033[0m\n"

MAIN_JS=lib/client/main.js
BUNDLE_JS=bundle/bundle.js
NPM=$(shell npm bin)

build: node_modules clean lint test bundle copy
	@echo $(TAG)$@$(END)
	$(NPM)/browserify -t babelify $(MAIN_JS) -o $(BUNDLE_JS) -v

watch:
	$(MAKE) -j watch-js watch-test run-dev-server

watch-js: node_modules bundle copy
	@echo $(TAG)$@$(END)
	$(NPM)/watchify -t babelify $(MAIN_JS) -o $(BUNDLE_JS) -d -v

run-dev-server:
	@echo $(TAG)$@$(END)
	$(NPM)/http-server bundle

run-mock-api-server: node_modules
	@echo $(TAG)$@$(END)
	$(NPM)/json-server --watch db.json --routes routes.json

watch-test: node_modules
	@echo $(TAG)$@$(END)
	$(NPM)/ava -r babel-register tests --watch

test: node_modules
	@echo $(TAG)$@$(END)
	$(NPM)/ava -r babel-register tests

lint: node_modules
	@echo $(TAG)$@$(END)
	$(NPM)/eslint lib/client/**/*.js

copy: bundle
	@echo $(TAG)$@$(END)
	@echo TODO
	cp -r public/* bundle

bundle:
	@mkdir -p $@

clean:
	@echo $(TAG)$@$(END)
	rm -rf bundle

node_modules: package.json
	@npm i
