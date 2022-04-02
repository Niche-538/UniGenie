package main

import (
	"os"
	api "unigenie/api"
	"unigenie/controllers"

	// routes "unigenie/routes"

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
	// routes.AuthRoutes(router)
	// routes.UserRoutes(router)

	// database.SetDatabase()

	// hashing check
	// user := models.User{
	// 	Password: "secret",
	// }

	// err := user.HashPassword(user.Password)
	// // assert.NoError(t, err)
	// if err != nil {
	// 	return
	// }
	// os.Setenv("passwordHash", user.Password)

	// fmt.Println("passwordHash Env: ", os.Getenv("passwordHash"))

	// hash := os.Getenv("passwordHash")

	// usr := models.User{
	// 	Password: hash,
	// }

	// err = usr.CheckPassword("secret")

	// if err != nil {
	// 	fmt.Println("Hash function does not work")
	// } else {
	// 	fmt.Println("Hash function works")
	// }

	// API Calls

	router.GET("/getUniversities", api.GetUniversities)
	router.GET("/getUsers", api.GetUsers)
	// router.POST("/signup", api.PostUsers)
	router.POST("/signup", controllers.Signup)
	router.POST("/login", controllers.Login)
	router.POST("/addUniversity", api.PostUniversities)
	router.POST("/addStudentDetails", api.PostStudentDetails)
	router.POST("/addUserPreference", api.PostUserPreferences)
	router.POST("/addUserUniversityApplication", api.PostUserUniversityApplication)
	router.GET("/getUserUniversityApplication/:user_id", api.FindUniversityByUserId)
	router.GET("/getUserPreferences/:user_id", api.FindUserPreferencesBuUserId)
	// Listen and Server in 0.0.0.0:8080
	router.Run(":" + port)
}
