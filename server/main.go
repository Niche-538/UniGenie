package main

import (
	"os"
	api "unigenie/api"
	"unigenie/routes"

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

	// models.SetDatabase()

	// API Calls

	router.GET("/getUniversities", api.GetUniversities)
	router.GET("/getUsers", api.GetUsers)
	router.POST("/signup", api.PostUsers)
	router.POST("/addUniversity", api.PostUniversities)
	router.POST("/addStudentDetails", api.PostStudentDetails)
	// Listen and Server in 0.0.0.0:8080
	router.Run(":" + port)
}
