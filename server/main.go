package main

import (
	"log"
	"net/http"
	"os"
	"strings"
	api "unigenie/api"
	"unigenie/auth"
	"unigenie/controllers"

	"github.com/gin-contrib/cors"
	"github.com/joho/godotenv"

	// routes "unigenie/routes"
	"github.com/gin-gonic/gin"
)

func getToken(c *gin.Context) (string, bool) {
	authValue := c.GetHeader("Authorization")
	arr := strings.Split(authValue, " ")
	if len(arr) != 2 {
		return "", false
	}
	authType := strings.Trim(arr[0], "\n\r\t")
	// if strings.ToLower(authType) != strings.ToLower("Bearer") {
	// 	return "", false
	// }

	if !strings.EqualFold(strings.ToLower(authType), strings.ToLower("Bearer")) {
		return "", false
	}

	return strings.Trim(arr[1], "\n\t\r"), true
}

func verifyToken(c *gin.Context) {
	token, ok := getToken(c)
	if !ok {
		c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
			"error": "token not found",
		})
		return
	}
	email, err := auth.TokenValidation(token)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
			"error": "user unauthorized",
		})
	}
	c.Set("email", email)
	c.Next()
}

func main() {

	err := godotenv.Load(".env")

	if err != nil {
		log.Fatalf("Error loading .env file")
	}

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
		// AllowOrigins:     []string{"http://localhost:3000"},
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"GET", "POST", "PATCH", "PUT", "DELETE"},
		AllowHeaders:     []string{"Content-Type", "Content-Length", "Accept-Encoding", "X-CSRF-Token", "Authorization", "accept", "origin", "Cache-Control", "X-Requested-With"},
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
	// router.POST("/login", controllers.Login)
	router.POST("/login", controllers.TokenLogin)
	router.POST("/addUniversity", api.PostUniversities)

	router.GET("/getUsers", api.GetUsers)

	router.GET("/getStudentDetails", api.GetStudentDetails)
	router.POST("/addStudentDetails", api.PostStudentDetails)

	router.GET("/getUserPreferences", verifyToken, api.GetUserPreferences)
	router.POST("/addUserPreference", api.PostUserPreferences)

	router.GET("/blogs", api.GetBlogs)
	router.POST("/addBlogs", api.PostBlogs)

	router.GET("/getTasks", api.GetTasks)
	router.POST("/addTasks", api.PostTasks)

	router.GET("/getUserUniversityApplications", api.GetUserUniversityApplication)
	router.GET("/addUserUniversityApplications", api.PostUserUniversityApplication)

	// University APIs

	router.GET("/getUniversities", api.GetUniversities)
	router.GET("/getCsUniversityByCountry/:country", api.GetCSUniversity)
	router.GET("/getMechUniversityByCountry/:country", api.GetMechUniversity)
	router.GET("/getMbaUniversityByCountry/:country", api.GetMBAUniversity)

	// Listen and Server in 0.0.0.0:8080
	router.Run(":" + port)
}
