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
	City 			string `json:"city"`
	State 			string `json:"state"`
	ZipCode 		uint 	`json:"zip_code"`
	Country 		string `json:"country"`
}

type EducationDetails struct {
	gorm.Model
	ID uint `gorm:"primaryKey;autoIncrement" json:"education_details_id"`
	InstituteName 		string 	`json:"institute_name"`
	InstituteCity  		string 	`json:"institute_city"`
	InstituteState     	string 	`json:"institute_state"`
	Degree 				string 	`json:"degree"`
	Major			 	string 	`json:"major"`
	CGPA 				float64	`json:"cgpa"`
	CGPAScale 			float64	`json:"cgpa_scale"`
	GRE	 				uint 	`json:"gre"`
	GREVerbal			uint 	`json:"gre_verbal"`
	GREQuant			uint 	`json:"gre_quant"`
	GREAWM 				float64	`json:"gre_awm"`
	TOEFL	 			uint 	`json:"toefl"`
	TOEFLRead 			uint 	`json:"toefl_read"`
	TOEFLListen			uint 	`json:"toefl_listen"`
	TOEFLSpeak 			uint 	`json:"toefl_speak"`
	TOEFLWrite 			uint 	`json:"toefl_write"`
	IELTS	 			float64	`json:"ielts"`
	IELTSRead 			float64	`json:"ielts_read"`
	IELTSListen			float64	`json:"ielts_listen"`
	IELTSSpeak 			float64	`json:"ielts_speak"`
	IELTSWrite 			float64	`json:"ielts_write"`
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
	// db.AutoMigrate(&PersonalDetails{})
	db.AutoMigrate(&EducationDetails{})
}
