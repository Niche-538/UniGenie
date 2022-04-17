package models

import (
	"gorm.io/gorm"
)

type University struct {
	gorm.Model
	ID      uint   `gorm:"primaryKey;autoIncrement" json:"university_id"`
	Name    string `gorm:"unique" json:"name"`
	Website string `gorm:"unique" json:"website"`
	Address string `gorm:"unique" json:"address"`
	City    string `json:"city"`
	State   string `json:"state"`
	Zip     uint   `json:"zip"`
	Country string `json:"country"`
}

type CsUniversity struct {
	gorm.Model
	ID      uint   `gorm:"primaryKey;autoIncrement" json:"cs_university_id"`
	Name    string `gorm:"unique" json:"name"`
	Type    string `gorm:"unique" json:"type"`
	Website string `gorm:"unique" json:"website"`
	State   string `json:"state"`
	Country string `json:"country"`
}

type MechUniversity struct {
	gorm.Model
	ID      uint   `gorm:"primaryKey;autoIncrement" json:"mech_university_id"`
	Name    string `gorm:"unique" json:"name"`
	Type    string `gorm:"unique" json:"type"`
	Website string `gorm:"unique" json:"website"`
	State   string `json:"state"`
	Country string `json:"country"`
}

type MbaUniversity struct {
	gorm.Model
	ID      uint   `gorm:"primaryKey;autoIncrement" json:"mba_university_id"`
	Name    string `gorm:"unique" json:"name"`
	Type    string `gorm:"unique" json:"type"`
	Website string `gorm:"unique" json:"website"`
	State   string `json:"state"`
	Country string `json:"country"`
}

type Program struct {
	gorm.Model
	ID            uint   `gorm:"primaryKey;autoIncrement" json:"program_id"`
	InstituteName string `json:"institute_name"`
	ProgramName   string `gorm:"unique" json:"program_name"`
	OfferedBy     string `json:"offered_by"`
	Intake        string `json:"intake"`
	// FallIntake    string `json:"fall_intake"`
	// SpringIntake  string `json:"spring_intake"`
	UniversityID uint       `json:"university_id"`
	University   University `gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
}

type OfferedCourse struct {
	gorm.Model
	ID         uint    `gorm:"primaryKey;autoIncrement" json:"course_id"`
	CourseName string  `gorm:"unique" json:"course_name"`
	ProgramID  uint    `json:"program_id"`
	Program    Program `gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
}
