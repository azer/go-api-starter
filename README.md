## go-api-starter

Kik starter module for Go APIs. It comes with;

* [Echo](http://github.com/labstack/echo)
* [Makefile for Go Projects](https://gist.github.com/azer/7c83d0b59de8328355ad)
* [godotenv](github.com/joho/godotenv)

## Install

Create your project with [kik](http://github.com/starters/kik) and choose `go-api-starter` as one of your starters.

## Usage

After a fresh installation, make sure running `make get` command to pull dependencies under `vendor/` folder.
Once you have the dependencies, `make start` to run the server and check `localhost:8000` if it works.

All commands:

* `make build`: Compile main Go file(s)
* `make get`: Get missing go dependencies, save them under `vendor/` folder
* `make install`: Compile and install packages and dependencies
* `make run`: Compile and run main Go file(s)
* `make watch`: Build and run main Go binary, watch for file changes, repeat.
* `make start`: Start the main Go binary.
* `make stop`: Stop the main Go binary.
* `make clean`: Clean Go binaries.