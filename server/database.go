package main

import (
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

// var universities = []University{
// 	{UniversityID: 1, Name: "University of Florida", Ranking: 1, Country: "USA"},
// 	{UniversityID: 2, Name: "University of Texas, Dallas", Ranking: 2, Country: "USA"},
// 	{UniversityID: 3, Name: "Stony Brook", Ranking: 3, Country: "USA"},
// }

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

func setDatabase() {
	db, err := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	// Migrate the schema
	db.AutoMigrate(&University{})
	db.AutoMigrate(&User{})
	db.AutoMigrate(&OfferedCourse{})

}

// func returnUniversities() {
// }

// Ignore

// var unis = []University{{Name: "University of Florida", Ranking: 1, Country: "USA"},
// 	{Name: "University of Texas, Dallas", Ranking: 2, Country: "USA"},
// 	{Name: "Stony Brook", Ranking: 3, Country: "USA"}}

// db.Create(&unis)
// db.Migrator().DropTable(&User{})
// db.Migrator().DropTable(&University{})
// db.Migrator().DropTable(&CoursesOffered{})

// db.Migrator().DropConstraint(&User{}, "primary_key")
// db.Migrator().DropConstraint(&University{}, "primary_key")
// db.Migrator().DropConstraint(&CoursesOffered{}, "primary_key")

// db.Migrator().DropColumn(&User{}, "id")
// db.Migrator().DropColumn(&University{}, "id")
// db.Migrator().DropColumn(&CoursesOffered{}, "id")

// var users = []User{{FirstName: "John", LastName: "Doe", Email: "jd@floridaman.com", Password: "John@123"},
// 	{FirstName: "Jenny", LastName: "Doe", Email: "jend@floridaman.com", Password: "Jen@123"},
// 	{FirstName: "Don", LastName: "Joe", Email: "dj@floridaman.com", Password: "Don@123"}}

// db.Create(&users)
