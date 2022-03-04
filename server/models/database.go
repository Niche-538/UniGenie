package models

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type University struct {
	gorm.Model
	ID      uint   `gorm:"primaryKey;autoIncrement" json:"university_id"`
	Name    string `json:"name"`
	Website string `json:"website"`
	Address string `json:"address"`
	City    string `json:"city"`
	State   string `json:"state"`
	Zip     uint   `json:"zip"`
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
	db.AutoMigrate(&OfferedCourse{})

}
