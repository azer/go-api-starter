package main

import (
	"github.com/joho/godotenv"
	"github.com/labstack/echo"
	"github.com/labstack/echo/engine/standard"
	"net/http"
	"os"
	"{hek:go-api:packageName}"
)

func Hi(c echo.Context) error {
	return c.JSON(http.StatusOK, &struct {
		Welcome string `json:"welcome"`
	}{
		{hek:go-api:packageName}.Welcome,
	})
}

func main() {
	if err := godotenv.Load(); err != nil {
		panic(err)
	}

	api := echo.New(){hek:go-api:staticEndpoint}
	api.Get("{hek:go-api:rootEndpoint}", Hi)
	api.Run(standard.New(os.Getenv("ADDR")))
}
