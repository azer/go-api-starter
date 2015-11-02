package main

import (
	"github.com/joho/godotenv"
	"github.com/labstack/echo"
	"net/http"
	"os"
	"{kik:slug}"
)

func Hi(c *echo.Context) error {
	return c.JSON(http.StatusOK, &struct {
		Welcome string `json:"welcome"`
	}{
		{kik:go-api:packageName}.Welcome,
	})
}

func main() {
	if err := godotenv.Load(); err != nil {
		panic(err)
	}

	api := echo.New(){kik:go-api:staticEndpoint}
	api.Get("{kik:go-api:rootEndpoint}", Hi)
	api.Run(os.Getenv("ADDR"))
}
