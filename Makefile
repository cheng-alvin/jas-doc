all: $(shell find . -name "*.md") 
		@node ./mdformatwrapper.js $^

.PHONY: all
