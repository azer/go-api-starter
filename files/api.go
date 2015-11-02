package main

import (
	"github.com/joho/godotenv"
	"github.com/labstack/echo"
	"net/http"
	"{kik:slug}"
)

func Hi(c *echo.Context) error {
	return c.JSON(http.StatusOK, &struct {
		Welcome string `json:"welcome"`
	}{
		{kik:variableName}.Welcome,
	})
}

func main() {
	if err := godotenv.Load(); err != nil {
		panic(err)
	}

	e := echo.New(){kik:go-api:staticEndpoint}
	e.Get("{kik:go-api:rootEndpoint}", Hi)
	e.Run(":8080")
}
