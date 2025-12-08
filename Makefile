all: $(shell find . -name "*.md") 
		flowmark $^ --semantic -w 80 -i --nobackup

.PHONY: all
