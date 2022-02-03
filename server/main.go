package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func getUniversities(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, universities)
}

func setupRouter() *gin.Engine {
	// Disable Console Color
	// gin.DisableConsoleColor()
	r := gin.Default()

	// Ping test
	r.GET("/ping", func(c *gin.Context) {
		c.String(http.StatusOK, "pong")
	})
	return r
}

func main() {
	r := setupRouter()
	setDatabase()
	r.GET("/universities", getUniversities)
	// Listen and Server in 0.0.0.0:8080
	r.Run(":8080")
}
