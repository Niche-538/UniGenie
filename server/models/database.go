package models

import (
	"fmt"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	// "time"
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

func SetDatabase() {
	db, err := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	// Migrate the schema
	db.AutoMigrate(&University{})
	db.AutoMigrate(&User{})
	// db.AutoMigrate(&OfferedCourse{})

	var unis = []University{{Name: "University of Florida", Ranking: 1, Country: "USA"},
		{Name: "University of Texas, Dallas", Ranking: 2, Country: "USA"},
		{Name: "Stony Brook", Ranking: 3, Country: "USA"}}

	db.Create(&unis)

	var users = []User{{FirstName: "John", LastName: "Doe", Email: "jd@floridaman.com", Password: "John@123"},
		{FirstName: "Jenny", LastName: "Doe", Email: "jend@floridaman.com", Password: "Jen@123"},
		{FirstName: "Don", LastName: "Joe", Email: "dj@floridaman.com", Password: "Don@123"}}

	db.Create(&users)

}

func PrintingTp() {
	fmt.Println("Imported")
}
