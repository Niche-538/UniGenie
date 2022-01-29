package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db = make(map[string]string)

func setupRouter() *gin.Engine {
	// Disable Console Color
	// gin.DisableConsoleColor()
	r := gin.Default()

	// Ping test
	r.GET("/ping", func(c *gin.Context) {
		c.String(http.StatusOK, "pong")
	})

	// Get user value
	r.GET("/user/:name", func(c *gin.Context) {
		user := c.Params.ByName("name")
		value, ok := db[user]
		if ok {
			c.JSON(http.StatusOK, gin.H{"user": user, "value": value})
		} else {
			c.JSON(http.StatusOK, gin.H{"user": user, "status": "no value"})
		}
	})

	// Authorized group (uses gin.BasicAuth() middleware)
	// Same than:
	// authorized := r.Group("/")
	// authorized.Use(gin.BasicAuth(gin.Credentials{
	//    "foo":  "bar",
	//    "manu": "123",
	//}))
	authorized := r.Group("/", gin.BasicAuth(gin.Accounts{
		"foo":  "bar", // user:foo password:bar
		"manu": "123", // user:manu password:123
	}))

	/* example curl for /admin with basicauth header
	   Zm9vOmJhcg== is base64("foo:bar")

	    curl -X POST \
	    http://localhost:8080/admin \
	    -H 'authorization: Basic Zm9vOmJhcg==' \
	    -H 'content-type: application/json' \
	    -d '{"value":"bar"}'
	*/
	authorized.POST("admin", func(c *gin.Context) {
		user := c.MustGet(gin.AuthUserKey).(string)

		// Parse JSON
		var json struct {
			Value string `json:"value" binding:"required"`
		}

		if c.Bind(&json) == nil {
			db[user] = json.Value
			c.JSON(http.StatusOK, gin.H{"status": "ok"})
		}
	})

	return r
}

type University struct {
	gorm.Model
	Name    string
	Ranking uint
	Country string
}

func main() {

	db, err := gorm.Open(sqlite.Open("unigenie_db.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	// Migrate the schema
	db.AutoMigrate(&University{})

	// Create
	db.Create(&University{Name: "University of Florida", Ranking: 5, Country: "USA"})

	// Read
	var university University
	db.First(&university, 1)                  // find product with integer primary key
	db.First(&university, "ranking = ?", "5") // find product with code D42

	// Update - update product's price to 200
	db.Model(&university).Update("Ranking", 1)
	// Update - update multiple fields
	db.Model(&university).Updates(University{Ranking: 6, Country: "United States of America"}) // non- fields
	db.Model(&university).Updates(map[string]interface{}{"Ranking": 6, "Country": "United States of America"})

	// Delete - delete product
	db.Delete(&university, 1)

	r := setupRouter()
	// Listen and Server in 0.0.0.0:8080
	r.Run(":8081")
}
