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
	ID        uint   `gorm:"primaryKey;autoIncrement" json:"user_id"`
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	Email     string `json:"email"`
	Password  string `json:"password"`
}

type Program struct {
	gorm.Model
	ID            uint   `gorm:"primaryKey;autoIncrement" json:"program_id"`
	InstituteName string `json:"institute_name"`
	ProgramName   string `json:"program_name"`
	OfferedBy     string `json:"offered_by"`
	FallIntake    string `json:"fall_intake"`
	SpringIntake  string `json:"spring_intake"`
}

type OfferedCourse struct {
	gorm.Model
	ID         uint   `gorm:"primaryKey;autoIncrement" json:"course_id"`
	CourseName string `json:"course_name"`
}

type PersonalDetails struct {
	gorm.Model
	ID uint `gorm:"primaryKey;autoIncrement" json:"personal_details_id"`
	FirstName 		string `json:"first_name"`
	LastName  		string `json:"last_name"`
	Email     		string `json:"email"`
	AddressLine1 	string `json:"address_line_1"`
	AddressLine2 	string `json:"address_line_2"`
	City 			string `json:"address_line_1"`
	State 			string `json:"address_line_2"`
	ZipCode 		uint `json:"address_line_1"`
	Country 		string `json:"address_line_2"`

	
}

func SetDatabase() {
	db, err := gorm.Open(sqlite.Open("unigenie.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	// Migrate the schema
	// db.AutoMigrate(&University{})
	// db.AutoMigrate(&User{})
	// db.AutoMigrate(&Program{})
	// db.AutoMigrate(&OfferedCourse{})
	db.AutoMigrate(&PersonalDetails{})
}
