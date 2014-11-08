PANDOC = pandoc
PANDOC_FLAGS = -s -S --mathjax -f markdown -t dzslides

all: agenda-20140213

agenda-20140213:
	$(PANDOC)  $(PANDOC_FLAGS) -o slides/$@.html $@.md
