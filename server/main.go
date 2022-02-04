package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

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

type OfferedCourse struct {
	gorm.Model
	ID uint `gorm:"primaryKey;autoIncrement" json:"Course ID"`
}

func getUniversities(c *gin.Context) {
	db, err := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	universities := []University{}

	db.Find(&universities)
	c.JSON(200, &universities)

}

func getUsers(c *gin.Context) {
	db, err := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	users := []User{}

	db.Find(&users)
	c.JSON(200, &users)

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
	r.GET("/getUniversities", getUniversities)
	r.GET("/getUsers", getUsers)
	// Listen and Server in 0.0.0.0:8080
	r.Run(":8080")
}
