package models

import (
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	ID        uint   `gorm:"primaryKey;autoIncrement" json:"user_id"`
	FirstName string `json:"first_name" validate:"required"`
	LastName  string `json:"last_name" validate:"required"`
	Email     string `gorm:"unique" json:"email" validate:"email, required"`
	Password  string `json:"password" validate:"required"`
}

type StudentDetails struct {
	gorm.Model
	ID             uint    `gorm:"primaryKey;autoIncrement" json:"personal_details_id"`
	FirstName      string  `json:"first_name" validate:"required"`
	LastName       string  `json:"last_name" validate:"required"`
	Email          string  `gorm:"unique" json:"email" validate:"email, required"`
	AddressLine1   string  `json:"address_line_1"`
	AddressLine2   string  `json:"address_line_2"`
	City           string  `json:"city"`
	State          string  `json:"state"`
	ZipCode        uint    `json:"zip_code"`
	Country        string  `json:"country"`
	InstituteName  string  `json:"institute_name"`
	InstituteCity  string  `json:"institute_city"`
	InstituteState string  `json:"institute_state"`
	Degree         string  `json:"degree"`
	Major          string  `json:"major"`
	CGPA           float64 `json:"cgpa"`
	CGPAScale      float64 `json:"cgpa_scale"`
	GRE            uint    `json:"gre"`
	GREVerbal      uint    `json:"gre_verbal"`
	GREQuant       uint    `json:"gre_quant"`
	GREAWM         float64 `json:"gre_awm"`
	TOEFL          uint    `json:"toefl"`
	TOEFLRead      uint    `json:"toefl_read"`
	TOEFLListen    uint    `json:"toefl_listen"`
	TOEFLSpeak     uint    `json:"toefl_speak"`
	TOEFLWrite     uint    `json:"toefl_write"`
	IELTS          float64 `json:"ielts"`
	IELTSRead      float64 `json:"ielts_read"`
	IELTSListen    float64 `json:"ielts_listen"`
	IELTSSpeak     float64 `json:"ielts_speak"`
	IELTSWrite     float64 `json:"ielts_write"`
	UserID         uint    `json:"user_id"`
	User           User    `gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
}

// var validate = validator.New()

// pointer receivers

func (user *User) HashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	if err != nil {
		return "", err
	}

	user.Password = string(bytes)
	return user.Password, nil
}

func (user *User) CheckPassword(providedPassword string) error {
	err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(providedPassword))
	if err != nil {
		return err
	}
	return nil
}

type UserPreferences struct {
	gorm.Model
	ID                uint   `gorm:"primaryKey;autoIncrement" json:"user_preference_id"`
	UserID            uint   `json:"user_id"`
	User              User   `gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
	CoursePreference  string `json:"course_preference"`
	CountryPreference string `json:"country_preference"`
}

type UserUniversityApplication struct {
	gorm.Model
	ID                        uint       `gorm:"primaryKey;autoIncrement" json:"user_university_application_id"`
	UserID                    uint       `json:"user_id"`
	User                      User       `gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
	UniversityApplicationLink string     `json:"university_application_link"`
	UniversityID              University `json:"univeristy_id"`
	University                University `gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
	TranscriptUploaded        bool       `json:"transcipt_uploaded"`
	LOR1                      bool       `json:"lor1"`
	LOR2                      bool       `json:"lor2"`
	LOR3                      bool       `json:"lor3"`
}

type Blogs struct {
	gorm.Model
	Blog_id      uint   `gorm:"primaryKey;autoIncrement" json:"blog_id"`
	Blog_head    string `json:"blog_head"`
	Blog_content string `json:"blog_content"`
	Upvotes      uint   `json:"upvotes"`
	Downvotes    uint   `json:"downvotes"`
	UserID       uint   `json:"user_id"`
	User         User   `gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
}


type Tasks struct {
	gorm.Model
	ID                        uint       `gorm:"primaryKey;autoIncrement" json:"task_id"`
	Task                      string     `json:"task"`
	UserID                    uint       `json:"user_id"`
	User                      User       `gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`

}

