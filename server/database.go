package main

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type University struct {
	gorm.Model
	ID      string `gorm:"primary_key" json:"id"`
	Name    string `json:"name"`
	Ranking uint   `json:"ranking"`
	Country string `json:"country"`
}

type User struct {
	gorm.Model
	ID       string `gorm:"primary_key" json:"id"`
	Name     string `json:"name"`
	Username string `json:"username"`
	Password string `json:"password"`
}

func setDatabase() {
	db, err := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	// Migrate the schema
	db.AutoMigrate(&University{})
	db.AutoMigrate(&User{})

	// Create
	db.Create(&University{Name: "University of Florida", Ranking: 1, Country: "USA"})
	db.Create(&University{Name: "University of Texas, Dallas", Ranking: 2, Country: "USA"})
	db.Create(&University{Name: "Stony Brook", Ranking: 3, Country: "USA"})

	// Read
	var university University
	db.First(&university, 1)                  // find product with integer primary key
	db.First(&university, "ranking = ?", "5") // find product with code D42

	// Update - update product's price to 200
	db.Model(&university).Update("Ranking", 1)
	// Update - update multiple fields
	db.Model(&university).Updates(University{Ranking: 6, Country: "United States of America"}) // non- fields
	db.Model(&university).Updates(map[string]interface{}{"Ranking": 6, "Country": "United States of America"})

	// // Delete - delete product
	// db.Delete(&university, 1)
}
