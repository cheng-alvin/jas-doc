all: $(shell find . -name "*.md") 
		mdformat $^ --wrap 80

.PHONY: all
