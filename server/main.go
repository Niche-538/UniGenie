package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// func getUniversities(c *gin.Context) {
// 	db, _ := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
// 	// var universities []map[string]interface{}
// 	// db.Table("University", " ").Find(&universities)

// 	universities := db.Table("University").Select("name")
// 	fmt.Println(universities)

// 	// db.Find(&University)
// 	c.IndentedJSON(http.StatusOK, universities)
// }

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

	// type University struct {
	// 	gorm.Model
	// 	UniversityID uint   `gorm:"primaryKey;autoIncrement" json:"university ID"`
	// 	Name         string `json:"name"`
	// 	Ranking      uint   `json:"ranking"`
	// 	Country      string `json:"country"`
	// 	// CreatedAt    time.Time `json:"createdAt"`
	// 	// UpdatedAt    time.Time `json:"updatedAt"`
	// }

	// db, _ := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
	// var universities []map[string]interface{}
	// db.Table("University", " ").Find(&universities)

	// var univ University
	// res := map[string]interface{}{}

	// fmt.Println("")
	// fmt.Println("###########################                   #####################################")
	// rows, _ := db.Table("Universities").Select("name").Rows()
	// db.Table("Universities").Take(&res)
	// for rows.Next() {
	// 	x := rows.Scan()
	// 	fmt.Println(x)
	// }
	// fmt.Println("###########################                   #####################################")
	// fmt.Println("")
	// r.GET("/universities", getUniversities)
	// Listen and Server in 0.0.0.0:8080
	r.Run(":8080")
}
