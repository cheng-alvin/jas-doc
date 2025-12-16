all: $(shell find . -name "*.md") 
		flowmark $^ -w 80 -i --nobackup

.PHONY: all
