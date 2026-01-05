# Should be provided, but fallback by default.
CONFIG_PATH	     ?=	$(abspath .)
SCRIPT           := $(abspath ./scripts)

all: format $(CONFIG_PATH)/mkdocs.yml 
format: $(shell find . -name "*.md") 	
	@node  $(SCRIPT)/mdformatwrapper.js $^

$(CONFIG_PATH)/mkdocs.yml: $(SCRIPT)/sidebarbuilder.js
	@node $< ./reference > nav.txt
	cat $(CONFIG_PATH)/config.yml nav.txt > $@
	@rm -rf nav.txt

.PHONY: all format
