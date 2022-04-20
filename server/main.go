package main

import (
	"os"
	api "unigenie/api"
	"unigenie/controllers"

	"github.com/gin-contrib/cors"

	// routes "unigenie/routes"
	"github.com/gin-gonic/gin"
)

func main() {

	port := os.Getenv("PORT")

	if port == "" {
		port = "8080"
	}

	//For Auto-Migration of structs in the form of tables in DB
	// models.SetDatabase()
	// controllers.TempSetDB()

	// setting up the router
	router := gin.New()
	router.Use(gin.Logger())

	// Setting CORS headers
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST", "PATCH", "PUT", "DELETE"},
		AllowHeaders:     []string{"Content-Type"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		AllowOriginFunc: func(origin string) bool {
			return origin == "https://localhost:3000"
		},
	}))

	// API Calls

	// User APIs

	// router.POST("/signup", api.PostUsers)
	router.POST("/signup", controllers.Signup)
	router.POST("/login", controllers.Login)
	router.POST("/tLogin", controllers.TokenLogin)
	router.POST("/addUniversity", api.PostUniversities)

	router.GET("/getUsers", api.GetUsers)

	router.GET("/getStudentDetails", api.GetStudentDetails)
	router.POST("/addStudentDetails", api.PostStudentDetails)

	router.GET("/getUserPreferences", api.GetUserPreferences)
	router.POST("/addUserPreference", api.PostUserPreferences)

	router.GET("/blogs", api.GetBlogs)
	router.POST("/addBlogs", api.PostBlogs)

	router.GET("/getTasks", api.GetTasks)
	router.POST("/addTasks", api.PostTasks)

	// University APIs

	router.GET("/getUniversities", api.GetUniversities)
	router.GET("/getUserUniversityApplications", api.GetUserUniversityApplication)
	router.GET("/getCsUniversityByCountry/:country", api.GetCSUniversity)
	router.GET("/getMechUniversityByCountry/:country", api.GetMechUniversity)
	router.GET("/getMbaUniversityByCountry/:country", api.GetMBAUniversity)

	// Listen and Server in 0.0.0.0:8080
	router.Run(":" + port)
}
