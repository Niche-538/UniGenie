package main

import (
	models "unigenie/api/models"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

// var db *gorm.DB

type University struct {
	gorm.Model
	ID      uint   `gorm:"primaryKey;autoIncrement" json:"university ID"`
	Name    string `json:"name"`
	Ranking uint   `json:"ranking"`
	Country string `json:"country"`
}

type User struct {
	gorm.Model
	ID        uint   `gorm:"primaryKey;autoIncrement" json:"User ID"`
	FirstName string `json:"First Name"`
	LastName  string `json:"Last Name"`
	Email     string `json:"username"`
	Password  string `json:"password"`
}

// func getUniversities(c *gin.Context) {
// 	db, err := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
// 	if err != nil {
// 		panic("failed to connect database")
// 	}

// 	universities := []University{}

// 	db.Find(&universities)
// 	c.JSON(http.StatusOK, &universities)

// }

func getUsers(c *gin.Context) {
	db, err := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	users := []User{}

	db.Find(&users)
	c.JSON(http.StatusOK, &users)

}

func main() {

	port := os.Getenv("PORT")

	if port == "" {
		port = "8080"
	}

	models.PrintingTp()

	// setting up the router
	router := gin.Default()
	router.Use(gin.Logger())
	// setDatabase()










	// router.GET("/getUniversities", getUniversities)
	router.GET("/getUsers", getUsers)
	router.GET("/getUni", models.GetUniversities)
	router.POST("/signup", postUsers)
	router.POST("/addUniversity", postUniversities)
	// Listen and Server in 0.0.0.0:8080
	router.Run(":8080")
}

// POST Functions

func postUsers(c *gin.Context) {
	var newUser User
	if err := c.ShouldBindJSON(&newUser); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	db, sht := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
	if sht != nil {
		panic("failed to connect database")
	}

	user := User{FirstName: newUser.FirstName, LastName: newUser.LastName, Email: newUser.Email, Password: newUser.Password}
	db.Create(&user)

	c.JSON(http.StatusOK, gin.H{"data": user})

}

func postUniversities(c *gin.Context) {
	var newUniv University
	if err := c.ShouldBindJSON(&newUniv); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	db, sht := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
	if sht != nil {
		panic("failed to connect database")
	}

	univ := University{Name: newUniv.Name, Ranking: newUniv.Ranking, Country: newUniv.Country}
	db.Create(&univ)

	c.JSON(http.StatusOK, gin.H{"data": univ})
}
