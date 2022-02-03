package main

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type University struct {
	gorm.Model
	ID      string `json:"id"`
	Name    string `json:"name"`
	Ranking uint   `json:"ranking"`
	Country string `json:"country"`
}

var universities = []University{
	{ID: "1", Name: "University of Florida", Ranking: 1, Country: "USA"},
	{ID: "2", Name: "University of Texas, Dallas", Ranking: 2, Country: "USA"},
	{ID: "3", Name: "Stony Brook", Ranking: 3, Country: "USA"},
}

type User struct {
	gorm.Model
	ID       string `json:"id"`
	Name     string `json:"name"`
	Username string `json:"username"`
	Password string `json:"password"`
}

// type CoursesOffered struct {
// 	gorm.Model
// 	CourseID     uint `gorm:"primary_key" json:"id"`
// 	universityID uint
// }

func setDatabase() {
	db, err := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	// Migrate the schema
	db.AutoMigrate(&University{})
	db.AutoMigrate(&User{})
}
