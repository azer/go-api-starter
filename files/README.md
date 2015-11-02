## {kik:name}

Created with [go-api-starter](http://github.com/starters/go-api-starter)

## Install

```bash
$ git clone {kik:remote}
$ make get
$ make watch
```

## Development

* Package source lives under `./src/{kik:slug}`
* Dependencies are saved to `./vendor/`

Commands:

* `make build`: Compile main Go file(s)
* `make get`: Get missing go dependencies, save them under `vendor/` folder
* `make install`: Compile and install packages and dependencies
* `make run`: Compile and run main Go file(s)
* `make watch`: Build and run main Go binary, watch for file changes, repeat.
* `make start`: Start the main Go binary.
* `make stop`: Stop the main Go binary.
* `make clean`: Clean Go binaries.

Links:

* [Echo](http://labstack.com/echo)
* [package echo](https://godoc.org/github.com/labstack/echo)
* [encoding/json](https://golang.org/pkg/encoding/json/)
* [Go by Example: JSON](https://gobyexample.com/json)
* [Kik](http://github.com/starters/kik)
* [go-api-starter](http://github.com/starters/go-api-starter)
