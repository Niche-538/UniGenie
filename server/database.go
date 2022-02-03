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
	// CreatedAt    time.Time `json:"createdAt"`
	// UpdatedAt    time.Time `json:"updatedAt"`
	// UniversityID uint   `gorm:"primaryKey;autoIncrement" json:"university ID"`

}

// var universities = []University{
// 	{UniversityID: 1, Name: "University of Florida", Ranking: 1, Country: "USA"},
// 	{UniversityID: 2, Name: "University of Texas, Dallas", Ranking: 2, Country: "USA"},
// 	{UniversityID: 3, Name: "Stony Brook", Ranking: 3, Country: "USA"},
// }

type User struct {
	gorm.Model
	ID       uint   `gorm:"primaryKey;autoIncrement" json:"User ID"`
	Name     string `json:"name"`
	Username string `json:"username"`
	Password string `json:"password"`
	// UserID   uint   `gorm:"primaryKey;autoIncrement" json:"User ID"`
}

type OfferedCourse struct {
	gorm.Model
	ID uint `gorm:"primaryKey;autoIncrement" json:"Course ID"`
	// UniversityID uint `json:"University ID Foreign Key"`
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

	var unis = []University{{Name: "University of Florida", Ranking: 1, Country: "USA"},
		{Name: "University of Texas, Dallas", Ranking: 2, Country: "USA"},
		{Name: "Stony Brook", Ranking: 3, Country: "USA"}}

	db.Create(&unis)
	// db.Migrator().DropTable(&User{})
	// db.Migrator().DropTable(&University{})
	// db.Migrator().DropTable(&CoursesOffered{})

	// db.Migrator().DropConstraint(&User{}, "primary_key")
	// db.Migrator().DropConstraint(&University{}, "primary_key")
	// db.Migrator().DropConstraint(&CoursesOffered{}, "primary_key")

	// db.Migrator().DropColumn(&User{}, "id")
	// db.Migrator().DropColumn(&University{}, "id")
	// db.Migrator().DropColumn(&CoursesOffered{}, "id")

}

// func returnUniversities() {
// }
