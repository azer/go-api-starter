GOPATH=$(shell pwd)/vendor:$(shell pwd)
GOBIN=$(shell pwd)/bin
GOFILES=$(wildcard *.go)
GONAME=$(shell basename "$(PWD)")
PID=/tmp/go-$(GONAME).pid

all: default

default:
	@echo "\n  🐣  {kik:title} API server"
	@$(MAKE) watch

build:
	@echo "  Building $(GOFILES) to ./bin"
	@GOPATH=$(GOPATH) GOBIN=$(GOBIN) go build -o bin/$(GONAME) $(GOFILES)

get:
	@GOPATH=$(GOPATH) GOBIN=$(GOBIN) go get .

install:
	@GOPATH=$(GOPATH) GOBIN=$(GOBIN) go install $(GOFILES)

run:
	@GOPATH=$(GOPATH) GOBIN=$(GOBIN) go run $(GOFILES)

watch: restart
	@echo "  Watching for changes..."
	@fswatch -o *.go src/**/*.go | xargs -n1 -I{}  make restart || make stop

restart: stop clean build start

start:
	@echo "  Starting bin/$(GONAME)"
	@./bin/$(GONAME) & echo $$! > $(PID)

stop:
	@echo "  Stopping bin/$(GONAME)"
	@-touch $(PID)
	@-kill `cat $(PID)` 2> /dev/null || true

clean:
	@echo "  Cleaning"
	@GOPATH=$(GOPATH) GOBIN=$(GOBIN) go clean

.PHONY: build get install run watch start stop restart clean
