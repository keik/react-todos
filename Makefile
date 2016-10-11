TAG="\n\n\033[0;32m\#\#\# "
END=" \#\#\# \033[0m\n"

MAIN_JS=lib/scripts/main.js
BUNDLE_JS=bundle/bundle.js
NPM=$(shell npm bin)

build: node_modules clean lint test bundle
	@echo $(TAG)$@$(END)
	$(NPM)/browserify -t babelify $(MAIN_JS) -o $(BUNDLE_JS)

watch: node_modules bundle
	@echo $(TAG)$@$(END)
	$(NPM)/watchify -t babelify $(MAIN_JS) -o $(BUNDLE_JS)

run-mock-api-server: node_modules
	@echo $(TAG)$@$(END)
	$(NPM)/json-server --watch db.json --routes routes.json

test: node_modules
	@echo $(TAG)$@$(END)
	@echo TODO

lint: node_modules
	@echo $(TAG)$@$(END)
	$(NPM)/eslint lib/scripts/**/*.js

bundle:
	@mkdir -p $@

clean:
	@echo $(TAG)$@$(END)
	rm -rf bundle

node_modules: package.json
	@npm i
