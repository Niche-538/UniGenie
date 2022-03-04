package main

import (
	"os"
	models "unigenie/api/models"
	routes "unigenie/api/routes"

	"github.com/gin-gonic/gin"
)

func main() {

	port := os.Getenv("PORT")

	if port == "" {
		port = "8080"
	}

	// setting up the router
	router := gin.New()
	router.Use(gin.Logger())

	// Routes
	routes.AuthRoutes(router)
	routes.UserRoutes(router)

	// API Calls
	router.GET("/getUniversities", models.GetUniversities)
	router.GET("/getUsers", models.GetUsers)

	// Listen and Server in 0.0.0.0:8080
	router.Run(":" + port)
}
