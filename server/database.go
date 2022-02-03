package main

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type University struct {
	gorm.Model
	UniversityID uint   `gorm:"primaryKey;autoIncrement" json:"university ID"`
	Name         string `json:"name"`
	Ranking      uint   `json:"ranking"`
	Country      string `json:"country"`
	// CreatedAt    time.Time `json:"createdAt"`
	// UpdatedAt    time.Time `json:"updatedAt"`
}

// var universities = []University{
// 	{UniversityID: 1, Name: "University of Florida", Ranking: 1, Country: "USA"},
// 	{UniversityID: 2, Name: "University of Texas, Dallas", Ranking: 2, Country: "USA"},
// 	{UniversityID: 3, Name: "Stony Brook", Ranking: 3, Country: "USA"},
// }

type User struct {
	gorm.Model
	UserID   uint   `gorm:"primaryKey;autoIncrement" json:"User ID"`
	Name     string `json:"name"`
	Username string `json:"username"`
	Password string `json:"password"`
}

type CoursesOffered struct {
	gorm.Model
	CourseID     uint `gorm:"primaryKey;autoIncrement" json:"Course ID"`
	UniversityID uint `json:"University ID Foreign Key"`
}

func setDatabase() {
	db, err := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	// Migrate the schema
	db.AutoMigrate(&University{})
	db.AutoMigrate(&User{})
	db.AutoMigrate(&CoursesOffered{})

	var unis = []University{{UniversityID: 1, Name: "University of Florida", Ranking: 1, Country: "USA"},
		{UniversityID: 2, Name: "University of Texas, Dallas", Ranking: 2, Country: "USA"},
		{UniversityID: 3, Name: "Stony Brook", Ranking: 3, Country: "USA"}}

	db.Create(&unis)
	// db.Migrator().DropTable(&User{})
	// db.Migrator().DropTable(&University{})
	// db.Migrator().DropTable(&CoursesOffered{})

}
