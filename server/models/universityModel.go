package models

import (
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

type Program struct {
	gorm.Model
	ID            uint   `gorm:"primaryKey;autoIncrement" json:"program_id"`
	InstituteName string `json:"institute_name"`
	ProgramName   string `json:"program_name"`
	OfferedBy     string `json:"offered_by"`
	Intake        string `json:"intake"`
	// FallIntake    string `json:"fall_intake"`
	// SpringIntake  string `json:"spring_intake"`
	UniversityID uint
	University   University `gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
}

type OfferedCourse struct {
	gorm.Model
	ID         uint   `gorm:"primaryKey;autoIncrement" json:"course_id"`
	CourseName string `json:"course_name"`
	ProgramID  uint
	Program    Program `gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
}
